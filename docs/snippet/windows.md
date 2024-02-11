```powershell title="windows openssh ssh client install"  # (1)
Add-WindowsCapability -Online -Name OpenSSH.Client
```

```powershell title="windows openssh ssh server install"  # (2)
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Start-Service -Name sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

1.  :man_raising_hand: Allows ssh connection to the server. Requires admin privilege.
2.  :man_raising_hand: Prerequisite for git to work. Requires admin privilege.
