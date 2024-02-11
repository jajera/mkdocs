``` bash title="configure ssh key-based authentication (*nix)"
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_server -C "ssh key for remote server access"
ssh-copy-id user@remoteserver
```

``` bash title="configure ssh key-based authentication (windows-standard user)"
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_server -C "ssh key for remote server access"
$authorizedKey = Get-Content -Path C:\Users\user\.ssh\id_ed25519_server.pub
$remotePowershell = "powershell New-Item -Force -ItemType Directory -Path C:\Users\user\.ssh; Add-Content -Force -Path C:\Users\user\.ssh\authorized_keys -Value '$authorizedKey'"
ssh username@remoteserver $remotePowershell
```

``` bash title="configure ssh key-based authentication (windows-admin user)"
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_server -C "ssh key for remote server access"
$authorizedKey = Get-Content -Path C:\Users\user\.ssh\id_ed25519_server.pub
$remotePowershell = "powershell Add-Content -Force -Path $env:ProgramData\ssh\administrators_authorized_keys -Value '$authorizedKey';icacls.exe ""$env:ProgramData\ssh\administrators_authorized_keys"" /inheritance:r /grant ""Administrators:F"" /grant ""SYSTEM:F"""
ssh username@remoteserver $remotePowershell
```

``` bash title="configure ssh-agent to start every login"
# append this on ~/.bashrc
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_server
```
