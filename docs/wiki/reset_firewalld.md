``` bash title="reset firewalld"
sudo systemctl stop firewalld
sudo yum reinstall firewalld
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo systemctl status firewalld
sudo ls /etc/firewalld/
```
