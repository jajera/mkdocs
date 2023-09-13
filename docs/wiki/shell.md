## list top directory's size (shell)
```no-highlight
sudo du -h / --max-depth=1 | sort -h -r
```

## uninstall ipa client (shell)
```no-highlight
sudo ipa-client-install --uninstall
```

sudo systemctl status named-chroot

dig +norecurse +noall +answer +comments @localhost 5.168.192.in-addr.arpa SOA | egrep 'SOA|;; flags:'

sudo rndc reload


/etc/named.conf
/var/named/chroot/etc/named.conf
