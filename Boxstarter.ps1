Update-ExecutionPolicy -Policy Unrestricted

Set-WindowsExplorerOptions -EnableShowHiddenFilesFoldersDrives -EnableShowFileExtensions -EnableExpandToOpenFolder -EnableShowFullPathInTitleBar -EnableOpenFileExplorerToQuickAccess -EnableShowRecentFilesInQuickAccess -EnableShowFrequentFoldersInQuickAccess
Set-TaskbarOptions -Combine Never

Disable-InternetExplorerESC
Disable-GameBarTips
Disable-UAC
Disable-BingSearch
Enable-RemoteDesktop

cinst chocolatey -y
cinst git.install -y

Install-WindowsFeature -Name Telnet-Client,Xps-Viewer
Set-Service -Name 'WSearch' -StartupType Automatic
Start-Service -Name 'WSearch'

Rename-Computer -NewName Base2016Audit -Restart -Force
