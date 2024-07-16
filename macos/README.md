# NOTE for macOS Users
Because the file `qm_<ver>-macos.dmg` is not coming from the Apple Store, after downloading you need to launch a console and change the attribute of this file:
```
$ xattr -c qm_<ver>-macos.dmg
```
Only after changing the file attribute, you can install QM on your macOS.