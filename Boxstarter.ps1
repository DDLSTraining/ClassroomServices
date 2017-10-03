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

Install-WindowsUpdate -AcceptEula -Criteria "BrowseOnly=0 OR BrowseOnly=1 AND IsAssigned=1 AND IsHidden=0 AND IsInstalled=0 AND Type='Software' OR Type='Driver'"
Rename-Computer -NewName Base2016Audit -Restart -Force
