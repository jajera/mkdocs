``` bash title="dig lookup using specific dns"
dig @localhost google.com
dig @dns.domain.local google.com
```

``` bash title="dig lookup checking dns zone using specific dns"
dig +norecurse +noall +answer +comments @localhost 5.168.192.in-addr.arpa SOA | egrep 'SOA|;; flags:'
```
