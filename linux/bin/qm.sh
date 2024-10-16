#!/bin/bash

# find directory of this wrapper
SCRIPT=$(readlink -f "$0")     # Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPTPATH=$(dirname "$SCRIPT") # Absolute path this script is in, thus /home/user/bin

# add SCRIPTPATH (in front of LD_LIBRARY_PATH)
if [ "${LD_LIBRARY_PATH}" ]; then
  LD_LIBRARY_PATH="${SCRIPTPATH}:${LD_LIBRARY_PATH}"
else
  LD_LIBRARY_PATH="${SCRIPTPATH}"
fi
export LD_LIBRARY_PATH

# replace this wrapper script with qm + args
exec "${SCRIPTPATH}/qm"  "$@"
