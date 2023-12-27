``` bash title="configure ssh key-based authentication"
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_server -C "ssh key for remote server access"
ssh-copy-id user@remoteserver
```

``` bash title="configure ssh-agent to start every login"
# append this on ~/.bashrc
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_server
```
