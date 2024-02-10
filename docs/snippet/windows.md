```powershell title="windows ssh install"  # (1)
Add-WindowsCapability -Online -Name OpenSSH.Client
```

1.  :man_raising_hand: Allows ssh connection to the server.
