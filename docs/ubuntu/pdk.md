## Virtio-win install
```
wget https://apt.puppet.com/puppet-tools-release-jammy.deb
sudo dpkg -i puppet-tools-release-jammy.deb
sudo apt-get -y update
sudo apt-get install -y pdk
rm puppet-tools-release-jammy.deb
```