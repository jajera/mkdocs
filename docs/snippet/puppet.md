``` bash title="puppet clean node certificate"
puppet node purge
puppet ssl clean
puppet agent -t
```

``` bash title="puppet delete node certificate"
puppetserver ca clean --certname node1.example.local
```

``` bash title="puppet execute specific class"
/opt/puppetlabs/bin/puppet apply -t --tags Some::class
```

``` bash title="puppet facter list facts"
facter
```

``` bash title="puppet facts"
sudo /opt/puppetlabs/bin/puppet facts
```

``` bash title="puppet print config"
/opt/puppetlabs/bin/puppet config print
```

``` bash title="puppet purge node"
puppet node purge node1.example.local
```

``` bash title="puppet run agent"
sudo /opt/puppetlabs/bin/puppet agent --test
```
