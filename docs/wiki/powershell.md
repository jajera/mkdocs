## vmware powercli install module (powershell)
```no-highlight
Install-Module -Name VMware.PowerCLI
```

## vmware powercli import module (powershell)
```no-highlight
Find-Module "VMware.PowerCLI" | Install-Module -Scope "CurrentUser" -AllowClobber
Import-Module "VMware.PowerCLI"
```

## vmware powercli connect to vcenter (powershell)
```no-highlight
Get-PowerCLIConfiguration
Set-PowerCLIConfiguration -InvalidCertificateAction Ignore
Connect-VIServer -Server vsphere-server
```

## vmware powercli get vm cpu memory info (powershell)
```no-highlight
Get-Vm -Name $VmName | fl Id, Name, NumCpu, MemoryMB, VMHost
```

## vmware powercli get vm network info (powershell)
```no-highlight
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty Nics | Select-Object NetworkName, IPAddress
(Get-Vm -Name $VmName).ExtensionData.Guest.Net.IpConfig.IpAddress
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty ExtensionData | Select-Object -ExpandProperty IpStack | Select-Object -ExpandProperty DnsConfig
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty ExtensionData | Select-Object -ExpandProperty Net | Select-Object -ExpandProperty IpConfig | Select-Object -ExpandProperty IpAddress
```

## vmware powercli get vm disk info (powershell)
```no-highlight
Get-HardDisk -VM $VmName | Select-Object Name, @{N="CapacityMB";E={$_.CapacityKB/1024}}
```

## vmware powercli get vm cluster info (powershell)
```no-highlight
(Get-VM -Name $VmName | Get-Cluster | Select-Object Name).Name
```

## vmware powercli get vm datastore info (powershell)
```no-highlight
(Get-VM -Name $VmName | Get-Datastore | Select-Object Name).Name
```