# GhostScan Ghost Image Scanning Scripts

## Description

The new Windows 2016 base image uses a newer version of Hyper-V which will not import older Hyper-V course images. This script will place a text file in the location of each image indicating if the course image supports running on the Windows 2016 base operating system.

## Instructions

1.   Create a `C:\Scripts` directory.
2.   Place both the `Ghostexp.exe` and the `Invoke-GhostScan.ps1` files into the directory.
3.   Edit `Invoke-GhostScan` and change the paths at the top of the file.
4.   Run PowerShell as Administrator.
5.   Change directory to `C:\Scripts`.
6.   Run the `Invoke-GhostScan.ps1` script.

If an error occurs in `Ghostexp`, click ok. It happened to me in Brisbane however continued after I clicked ok.
