``` bash title="shell list top directory's size"
sudo du -h / --max-depth=1 | sort -h -r
```

``` bash title="shell uninstall ipa client"
sudo ipa-client-install --uninstall
```

``` bash title="shell restart named service"
sudo systemctl restart named-chroot
sudo systemctl status named-chroot
```

``` bash title="shell soft reload dns"
sudo rndc reload # (1)
```

1.  :man_raising_hand: This may not work in RedHat8; alternatively you can restart the service instead.
