The DDLS Base Operating System Build
Latest Version: Windows Server 2016 
Evaluation
 
This page contains 
details on the build process for the DDLS Base base image.
 
Phase One 
- Windows Install


Boot to the Windows Server 2012 Evaluation ISO in a virtual machine on 
Hyper-V. 
Go through the wizard and click Advanced to select the disk to install onto. 

Press SHIFT and F10 to open a command prompt. 
Use DiskPart to create two 50GB partitions. Note: this step will prevent the 
installer creating the 350MB hidden boot partition. 

diskpart 
select disk 0 
create partition primary size=61440 
create partition primary size=61440
Close the command prompt and refresh the partition GUI display. 
Select the first partition to install Windows in. 
After the install is complete, type in an Administrator password of 
Pa$$w0rd.
Phase Two - Update and Image

Open a PowerShell prompt and type this command.START http://boxstarter.org/package/nr/url?https://raw.githubusercontent.com/DDLSTraining/ClassroomSupport/master/Boxstarter.ps1 

Clone the Tools, Drivers, and WinPE repositories. You will need to 
authenticate prior to running the git commands. 

C:\>git clone //gears.ddls.com.au/Git/Base2016/Tools.git 
C:\>git clone //gears.ddls.com.au/Git/Base2016/Drivers.git 
C:\>git clone //gears.ddls.com.au/Git/Base2016/WinPE.git
From a PowerShell prompt, run C:\Tools\Set-EnvironmentVariables.ps1 
No Need: Download and install the latest Windows Management Framework. 
Install Office 2016 VL manually. 
Skipping: Install Office Visio 2013 VL manually. 
Skipping: nstall Office Project VL manually. 
Skipping: Install Office SharePoint Designer 2013 manually. 
I don't think this is needed: Install the VMware vSphere client manually. 
Reboot. 
Install Windows Updates and reboot. 
Checkpoint the Virtual Machine. 
From a PowerShell prompt, run Start-Sysprep and do an Audit sysprep. 
From a PowerShell prompt, run Start-Sysprep and do not reboot, rather 
shutdown. 
Boot to WinPE and image.
