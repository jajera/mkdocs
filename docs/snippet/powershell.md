``` powershell title="powershell install vmware powercli module"
Install-Module -Name VMware.PowerCLI
```

``` powershell title="powershell import vmware powercli module"
Find-Module "VMware.PowerCLI" | Install-Module -Scope "CurrentUser" -AllowClobber
Import-Module "VMware.PowerCLI"
```

``` powershell title="powershell powercli connect to vcenter"
Get-PowerCLIConfiguration
Set-PowerCLIConfiguration -InvalidCertificateAction Ignore
Connect-VIServer -Server vsphere-server
```

``` powershell title="powershell powercli get vm cpu memory info"
Get-Vm -Name $VmName | fl Id, Name, NumCpu, MemoryMB, VMHost
```

``` powershell title="powershell powercli get vm network info"
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty Nics | Select-Object NetworkName, IPAddress
(Get-Vm -Name $VmName).ExtensionData.Guest.Net.IpConfig.IpAddress
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty ExtensionData | Select-Object -ExpandProperty IpStack | Select-Object -ExpandProperty DnsConfig
Get-VMGuest -VM $VmName | Select-Object -ExpandProperty ExtensionData | Select-Object -ExpandProperty Net | Select-Object -ExpandProperty IpConfig | Select-Object -ExpandProperty IpAddress
```

``` powershell title="powershell powercli get vm disk info"
Get-HardDisk -VM $VmName | Select-Object Name, @{N="CapacityMB";E={$_.CapacityKB/1024}}
```

``` powershell title="powershell powercli get cluster info"
(Get-VM -Name $VmName | Get-Cluster | Select-Object Name).Name
```

``` powershell title="powershell powercli get vm datastore info"
(Get-VM -Name $VmName | Get-Datastore | Select-Object Name).Name
```
