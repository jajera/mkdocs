```powershell title="windows openssh ssh client install"
Add-WindowsCapability -Online -Name OpenSSH.Client # (1) # (3)
```

```powershell title="windows openssh ssh server install"
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0 # (2) # (3)
Start-Service -Name sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

1.  :man_raising_hand: Prerequisite for git to work.
2.  :man_raising_hand: Allows ssh connection to the server.
3.  :man_raising_hand: Requires admin privilege.
