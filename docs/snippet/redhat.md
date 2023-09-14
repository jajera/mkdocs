``` bash title="redhat disk resize"
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

``` bash title="redhat docker install"
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli --nobest --allowerasing
sudo systemctl start docker
sudo systemctl enable docker
```

``` bash title="redhat htop install"
sudo dnf install -y htop
```

``` bash title="redhat make install"
sudo yum install -y make
```

``` bash title="redhat netstat install"
sudo dnf install -y net-tools
```

``` bash title="redhat network-scripts install"
sudo dnf install -y network-scripts # (1)
```

1.  :man_raising_hand: Required for ifup/ifdown command.

``` bash title="redhat 7 powershell install"
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
curl https://packages.microsoft.com/config/rhel/7/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install -y makecache powershell
```

``` bash title="redhat 8 powershell install"
curl https://packages.microsoft.com/config/rhel/8/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install -y powershell
pwsh
```

``` bash title="redhat powershell upgrade"
sudo dnf upgrade powershell
```

``` bash title="redhat subscription"
subscription-manager config --list
subscription-manager register
subscription-manager refresh
subscription-manager attach --auto
subscription-manager list --available --all
```

``` bash title="redhat 7 sync time with an ntp server"
sudo ntpdate -q nz.pool.ntp.org
```

``` bash title="redhat vm template prerequisite install"
yum update
yum install -y open-vm-tools perl
```
