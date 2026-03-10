![QM model-based design tool](https://www.state-machine.com/img/qm_3monitors.jpg)

# What's New?

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/QuantumLeaps/qm)](https://github.com/QuantumLeaps/qm/releases/latest)

View QM Revision History at:
https://www.state-machine.com/qm/history.html

### Documentation
The online HTML documentation for the **latest** version of QM is located
at: https://www.state-machine.com/qm/

The offline HTML documentation for **this** particular version of QM
is located in the folder `html/`. To view the offline documentation, open
the file `html/index.html` in your web browser.


# Issue Tacking and Support

> [!IMPORTANT]
> **This repository does NOT use GitHub Issues for technical support.**

Please use the following official support channels [hosted on SourceForge](https://sourceforge.net/p/qpc):
- **Bug Reports:** [**Bug Tracker database**](https://sourceforge.net/p/qpc/bugs)
- **Feature Requests:** [**Feature Requests database**](https://sourceforge.net/p/qpc/feature-requests)
- **Questions & Discussion:** [**Free Support Forum**](https://sourceforge.net/p/qpc/discussion/668726)

[![Free Support Forum](https://www.state-machine.com/attachments/support.png "Free QP/QM Support Forum")](https://sourceforge.net/p/qpc/discussion/668726)

> [!NOTE]
> The [QP/QM Free Support Forum](https://sourceforge.net/p/qpc/discussion/668726) has been active for decades &mdash; *predating GitHub* &mdash; and provides a **searchable** archive of answers, troubleshooting guidance, and resolved issues. Posts to this forum benefit the entire community and are typically answered the same day.


# About QM
QM (QP Modeler) is a freeware graphical modeling tool for designing and
implementing real-time embedded software based on the UML state machines
and the lightweight
[QP Real-Time Event Frameworks (RTEFs)](https://www.state-machine.com/products/qp).
QM is available for Windows (x64), Linux (x64), and macOS (ARM64).

> [!TIP]
> For more information, please refer to the online QM Manual at:
https://www.state-machine.com/qm/


# Downloading and Installing QM
The most recommended way of obtaining QM is by downloading the
[QP-bundle](https://www.state-machine.com/#Downloads), which includes
QM and also all [QP frameworks](https://www.state-machine.com/products/qp)
and the [QTools collection](https://www.state-machine.com/products/qtools).
The main advantage of obtaining QM bundled together like that is that you
get all components, tools and examples ready to go.

> [!TIP]
> [QP-bundle](https://www.state-machine.com/#Downloads) is the
**most recommended** way of downloading and installing QM. However,
if you are allergic to installers and GUIs or don't have administrator
privileges you can also **download and install QM separately**
as described below.

> [!CAUTION]
> If you have any previous version of QM installed on your system,
please *uninstall* it before installing the new version.


### Installing QM on Windows (x64)
Go to the [QM releases](https://github.com/QuantumLeaps/qm/releases) and
download the QM installer (`qm_<ver>-windows.exe`), which is digitally signed
by Quantum Leaps. The installer will create a desktop shortcut for QM and will
also associate QM model files (`*.qm` and `*.qmp`)

Alternatively, if you are allergic to installers, you can download QM zip
archive for Windows (`qm_<ver>-windows.zip`). Installation consists of
unzipping the archive into any directory, although the `C:\qp\` folder is the
recommended default.

> [!TIP]
>  It is generally not recommended to install QM in such standard
locations as "Program Files" or "Program Files (x86)" because these
directories have access limitations and don't allow you to modify the
QM Style Sheets (`qm_dark.qss` and `qm_light.qss`) or the model templates.

If you installed QM via the installer program, the uninstaller will be
provided and you can uninstall QM via the standard "Apps and Features".

If you installed QM from the zip archive, you uninstall QM by simply deleting
the installation directory.


### Installing QM on Linux (x64)
Go to the [QM releases](https://github.com/QuantumLeaps/qm/releases) and
download the QM zip archive for Linux (`qm_<ver>-linux.zip`). You can
unzip the archive into any directory, although the `~/qp/` folder is the
recommended default.

After unzipping the archive, go to the `qm/bin/` directory and make sure
that the `qm` executable and the `qm.sh` shell script have executable
permissions. You can either do this  with your desktop's file manager
or at the command line, type:

```sh
chmod u+x qm
chmod u+x qm.sh
```

> [!NOTE]
> To run the QM application on Linux, you need to run the
`qm/bin/qm.sh` script as well as the `qm/bin/qm` executable. Make sure
that both files have executable permissions.

#### Troubleshooting QM on Linux
> [!NOTE]
> Some Linux distributions (e.g., Ubuntu) might report problems
with missing Qt plugins. For example, if you launch `qm/bin/qm.sh` form a
terminal, you might get the following output:

```
qt.qpa.plugin: Could not load the Qt platform plugin "wayland"...
```

or

```
qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found...
```

One know solution to fix this issue is to install the following:

```sh
sudo apt install libxcb-cursor0
```

### Installing QM on macOS (ARM64)
Go to the [QM releases](https://github.com/QuantumLeaps/qm/releases) and
download the disk image for macOS (`qm_<ver>-macos.dmg`). Because the `.dmg`
file is not coming from the Apple Store, after downloading you need to launch
a console and change the attribute of this file:

```sh
xattr -c qm_<ver>-macos.dmg
```

Only after changing the file attribute, you can install QM on your macOS.
Double click on `.dmg` file. This will mount and open the disk image.
To install the QM tool, you simply drag the qm.app image into the
Applications folder (typically visible in the Dock). If you wish, you might
also create the alias of the qm.app and place it on your Desktop.

To uninstall QM, simply delete the qm.app file and the examples.


# Example Projects
The QM example models are included in the QP baseline distributions. The
console-type examples are available for Windows (MinGW and Visual C++),
Linux, and macOS.

Embedded examples are available for a number of boards, such as ARM
Cortex-M, ARM Cortex-R and MSP430 with the GNU, ARM/KEIL, and IAR compilers.

Additionally, a number of examples are provided for the host computers
(Windows, Linux and macOS). These examples don't require any embedded
hardware to try.

All examples are located in the <qp>/examples/ directory, where <qp>
denotes the folder where you have installed the specific version of the
QP framework (QP/C or QP/C++).


# Licensing QM
The QM graphical modeling tool is freeware. It is free to download and
free use, but is not open source. During the installation you will need
to accept a basic End-User License Agreement (see
https://www.state-machine.com/qm/license.html ), which legally protects
Quantum Leaps from any warranty claims, prohibits removing any copyright
notices from QM, selling it, and creating similar competitive products.
The EULA also prohibits distributing QM from third-party websites. The
only legitimate source of QM is the SourceForge.net/projects/qpc/ website.

> [!NOTE]
> QM uses internally the Qt application toolkit under LGPL
Please refer to the LGPL Compliance Package for QM in the sub-directory
qt_lgpl or online at https://www.state-machine.com/qm/qt_lgpl.html for
more information how to obtain the source code for the Qt toolkit.


## Licensing Generated Code
The code generated by QM is licensed under the same terms as the
underlying QP framework, for which the code has been generated. Please
refer to the QP licensing (https://www.state-machine.com/licensing/ )
for more information.

> [!NOTE]
> QM models without a valid QP license certificate (assumed to be
covered by GPL) can only generate **up to 20 states**. The limitation has
been introduced to reduce the widespread GPL infringement with respect to
the QP/C and QP/C++ real-time embedded frameworks that underline the code
generation in QM.


# Contact Information
- [Quantum Leaps website](https://www.state-machine.com)
- [Quantum Leaps licensing](https://www.state-machine.com/licensing)
- [info@state-machine.com](mailto:info@state-machine.com)


# How to Help this Project?
If you like this project, please give it a star (in the upper-right corner
of your browser window):

<p align="center"><img src="https://www.state-machine.com/img/github-star.jpg"/></p>
