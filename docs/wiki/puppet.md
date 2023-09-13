## clean node certificate (puppet)

```no-highlight
puppet node purge
puppet ssl clean
puppet agent -t
```

## delete node certificate (puppet)

```no-highlight
puppetserver ca clean --certname node1.example.local
```

## execute specific class (puppet)

```no-highlight
/opt/puppetlabs/bin/puppet apply -t --tags Some::class
```

## facter list facts (puppet)

```no-highlight
facter
```

## facts (puppet)

```no-highlight
sudo /opt/puppetlabs/bin/puppet facts
```

## print config (puppet)

```no-highlight
/opt/puppetlabs/bin/puppet config print
```

## purging node (puppet)

```no-highlight
puppet node purge node1.example.local
```

## run agent (puppet)

```no-highlight
sudo /opt/puppetlabs/bin/puppet agent --test
```
