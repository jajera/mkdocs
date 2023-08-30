## delete node certificate (puppet)
```no-highlight
puppetserver ca clean --certname node1.example.local
```

## facter list facts (puppet)
```no-highlight
facter
```

## facts (puppet)
```no-highlight
puppet facts
```

## purging node (puppet)
```no-highlight
puppet node purge node1.example.local
```

## clean node certificate (puppet)
```no-highlight
puppet node purge
puppet ssl clean
puppet agent -t
```
