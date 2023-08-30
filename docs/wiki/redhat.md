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

## netstat install (redhat)
```no-highlight
dnf install -y net-tools
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

## make install (redhat)
```no-highlight
yum install -y make
```

## subscription (redhat)
```no-highlight
subscription-manager config --list
subscription-manager register
subscription-manager refresh
subscription-manager attach --auto
subscription-manager list --available --all
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
