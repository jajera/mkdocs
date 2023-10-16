``` bash title="check firewall state"
sudo firewall-cmd --state
```

``` bash title="list all defined firewall rules"
sudo firewall-cmd --list-all
```

``` bash title="list defined firewall services"
sudo firewall-cmd --get-services
```

``` bash title="show firewall service info"
sudo firewall-cmd --info-service=ssh
```

``` bash title="list defined firewall rich rules"
sudo firewall-cmd --list-rich-rules
```

``` bash title="remove firewall rich rules"
sudo firewall-cmd --remove-rich-rule='rule family="ipv4" port port="8080" protocol="tcp" accept'
```

``` bash title="remove firewall rich rules by service name"
sudo firewall-cmd --remove-rich-rule='rule family="ipv4" service name="nomachine" accept'
```
