#!/bin/sh

# find directory of this wrapper
dirname="$(dirname "${0}")"
tmp="${dirname#?}"

if [ "${dirname%$tmp}" != "/" ]; then
  dirname="${PWD}/${dirname}"
fi

# add dirname (in front of LD_LIBRARY_PATH)
if [ "${LD_LIBRARY_PATH}" ]; then
  LD_LIBRARY_PATH="${dirname}:${LD_LIBRARY_PATH}"
else
  LD_LIBRARY_PATH="${dirname}"
fi
export LD_LIBRARY_PATH

# replace this wrapper script with qmc + args
exec "${dirname}/qmc"  "$@"
