## powershell install (redhat)
```no-highlight
curl https://packages.microsoft.com/config/rhel/8/prod.repo | sudo tee /etc/yum.repos.d/microsoft.repo
sudo dnf install --assumeyes powershell
pwsh

[//]: # redhat powershell install
```

## powershell upgrade (redhat)
```no-highlight
sudo dnf upgrade powershell

[//]: # redhat powershell upgrade
```

## subscription (redhat)
```no-highlight
subscription-manager config --list
subscription-manager register
subscription-manager refresh
subscription-manager attach --auto
subscription-manager list --available --all

[//]: # redhat subscription manager
```

## docker install (redhat)
```no-highlight
yum install -y yum-utils
yum-config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce docker-ce-cli --nobest --allowerasing
systemctl start docker
systemctl enable docker

[//]: # redhat docker install
```

## vcenter - vm template prerequisite (redhat)
```no-highlight
yum update
yum install -y open-vm-tools perl

[//]: # redhat vcenter vm template
```

## redhat - make install
```no-highlight
yum install -y make

[//]: # redhat make install
```