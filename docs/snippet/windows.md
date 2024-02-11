```powershell title="windows openssh ssh client install"
Add-WindowsCapability -Online -Name OpenSSH.Client # (1)
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
```

```powershell title="windows openssh ssh server install"
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0 # (2)
Start-Service -Name sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

1.  :man_raising_hand: Prerequisite for git to work. Requires admin privilege.
2.  :man_raising_hand: Allows ssh connection to the server. Requires admin privilege.
