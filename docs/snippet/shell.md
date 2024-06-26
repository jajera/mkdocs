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

``` bash title="shell list dns configured"
( nmcli dev list || nmcli dev show ) 2>/dev/null | grep DNS

or 

cat /etc/resolv.conf
```

``` bash title="shell show gateway"
ip route | grep default

or

route -n

or

netstat -r -n
```

``` bash title="shell gh run delete"
ACTION_FILE="pdk.yaml"
FORKS_COUNT=15
WORKFLOW_RUN_TO_DELETE=50
gh run list --json databaseId  -q '.[].databaseId' -w $ACTION_FILE --limit $WORKFLOW_RUN_TO_DELETE | \
xargs -IID -P $FORKS_COUNT gh api "repos/$(gh repo view --json nameWithOwner -q .nameWithOwner)/actions/runs/ID" -X DELETE
```
