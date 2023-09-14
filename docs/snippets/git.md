``` bash title="git configure ssh authentication"
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_github -C "ssh key for github"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ssh key for github
ssh-keyscan github.com >> ~/.ssh/known_hosts
configure git app side
```

``` bash title="git delete local branch"
git branch -d <BRANCH>
```

``` bash title="git delete remote branch"
git push origin -d <BRANCH>
```

``` bash title="git disable ssl verification"
git config http.sslVerify false
```

``` bash title="git disable windows like line endings"
git config core.autocrlf false
```

``` bash title="git fix gitignore"
git rm -r --cached .
git add --all; git commit -m 'fix .gitignore'; git push
```

``` bash title="git update new token"
git remote set-url origin https://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@github.com/<username>/<repo>.git
```
