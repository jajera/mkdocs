## powershell install (redhat)
```no-highlight
curl https://packages.microsoft.com/config/rhel/8/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install --assumeyes powershell
pwsh

<!-- redhat powershell install -->
```

## powershell upgrade (redhat)
```no-highlight
sudo dnf upgrade powershell

<!-- redhat powershell upgrade -->
```