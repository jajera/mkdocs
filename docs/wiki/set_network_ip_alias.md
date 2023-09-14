## set network ip addreess alias to a nic (redhat)

Assuming there's only one nic

- this directory will have one config file and if it maybe ifcfg-eth0.
- create one file for each alias, it would like this below if you need two aliases.

``` bash
# tree /etc/sysconfig/network-scripts
/etc/sysconfig/network-scripts
├── ifcfg-eth0
├── ifcfg-eth0:0
└── ifcfg-eth0:1
```

- each new config file would look like this.

``` bash
# cat /etc/sysconfig/network-scripts/ifcfg-eth0:0
DEVICE=eth0:0
ONBOOT=yes
ONPARENT=yes
IPADDR=192.168.122.100
NETMASK=255.255.255.0
```

``` bash
# cat /etc/sysconfig/network-scripts/ifcfg-eth0:1
DEVICE=eth0:1
ONBOOT=yes
ONPARENT=yes
IPADDR=192.168.123.100
NETMASK=255.255.255.0
```
