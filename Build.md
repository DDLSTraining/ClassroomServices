# The DDLS Base Operating System Build

Latest Version: Windows Server 2016 Evaluation
 
This page contains details on the build process for the DDLS Base classroom image.
 
## Phase One - Windows Install

1.  Boot to the Windows Server 2012 Evaluation ISO in a virtual machine on Hyper-V.
2.  Go through the wizard and click Advanced to select the disk to install onto.
3.  Press SHIFT and F10 to open a command prompt.
4.  Use DiskPart to create two 60GB partitions.
   *   Note: this step will prevent the installer creating the 350MB hidden boot partition. 
   *   diskpart 
   *   select disk 0 
   *   create partition primary size=61440 
   *   create partition primary size=61440
5.  Close the command prompt and refresh the partition GUI display. 
6.  Select the first partition to install Windows into. 
7.  After the install is complete, type in an Administrator password of Pa$$w0rd.

## Phase Two - Update and Image

1.  Open a PowerShell prompt and type this command:
   *   START http://boxstarter.org/package/nr/url?https://raw.githubusercontent.com/DDLSTraining/ClassroomSupport/master/Boxstarter.ps1 
2.  Clone the Tools, Drivers, and WinPE repositories. You will need to authenticate prior to running the git commands. 
   *   C:\>git clone //gears.ddls.com.au/Git/Base2016/Tools.git 
   *   C:\>git clone //gears.ddls.com.au/Git/Base2016/Drivers.git 
   *   C:\>git clone //gears.ddls.com.au/Git/Base2016/WinPE.git
3.  From a PowerShell prompt, run `C:\Tools\Set-EnvironmentVariables.ps1 `
4.  Install Office 2016 VL manually. 
5.  Skipping: Install Office Visio 2013 VL manually. 
6.  Skipping: nstall Office Project VL manually. 
7.  Skipping: Install Office SharePoint Designer 2013 manually. 
8.  Reboot. 
9.  Install Windows Updates and reboot. 
10. Checkpoint the Virtual Machine. 
11. From a PowerShell prompt, run Start-Sysprep and do an Audit sysprep. 
12. From a PowerShell prompt, run Start-Sysprep and do not reboot, rather shutdown. 
13.  Boot to WinPE and image.
