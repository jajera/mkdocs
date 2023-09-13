## disk resize (redhat)

```no-highlight
lvdisplay
lvs
lsblk 
pvs
ls /sys/class/scsi_device/
echo 1 > /sys/class/scsi_device/0\:0\:0\:0/device/rescan
ls /sys/class/scsi_device/
growpart /dev/sda 3
lsblk 
pvresize /dev/sda3
pvs
lvextend -l +100%FREE --resizefs /dev/mapper/rhel-root
df -hT | grep mapper
```

## docker install (redhat)

```no-highlight
yum install -y yum-utils
yum-config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce docker-ce-cli --nobest --allowerasing
systemctl start docker
systemctl enable docker
```

## htop install (redhat)

```no-highlight
dnf install -y htop
```

## make install (redhat)

```no-highlight
yum install -y make
```

## netstat install (redhat)

```no-highlight
dnf install -y net-tools
```

## network-scripts install as required for ifup/ifdown command (redhat)

```
sudo dnf install -y network-scripts
```

## powershell install (redhat 7)

```no-highlight
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
curl https://packages.microsoft.com/config/rhel/7/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install -y makecache powershell
```

## powershell install (redhat 8)

```no-highlight
curl https://packages.microsoft.com/config/rhel/8/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install -y powershell
pwsh
```

## powershell upgrade (redhat)

```no-highlight
sudo dnf upgrade powershell
```

## subscription (redhat)

```no-highlight
subscription-manager config --list
subscription-manager register
subscription-manager refresh
subscription-manager attach --auto
subscription-manager list --available --all
```

## set network ip addreess alias to a nic (redhat)

Assuming there's only one nic
- this directory will have one config file and if it maybe ifcfg-eth0.
- create one file for each alias, it would like this below if you need two aliases.

```no-highlight
# tree /etc/sysconfig/network-scripts
/etc/sysconfig/network-scripts
├── ifcfg-eth0
├── ifcfg-eth0:0
└── ifcfg-eth0:1
```

- each new config file would look like this.

```no-highlight
# cat /etc/sysconfig/network-scripts/ifcfg-eth0:0
DEVICE=eth0:0
ONBOOT=yes
ONPARENT=yes
IPADDR=192.168.122.100
NETMASK=255.255.255.0
```

```no-highlight
# cat /etc/sysconfig/network-scripts/ifcfg-eth0:1
DEVICE=eth0:1
ONBOOT=yes
ONPARENT=yes
IPADDR=192.168.123.100
NETMASK=255.255.255.0
```

## sync time with an ntp server (redhat)

```no-highlight
sudo ntpdate -q nz.pool.ntp.org
```

## vcenter - vm template prerequisite install (redhat)

```no-highlight
yum update
yum install -y open-vm-tools perl
```
