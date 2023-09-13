## configure ssh authentication (git)

```no-highlight
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_github -C "ssh key for github"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ssh key for github
ssh-keyscan github.com >> ~/.ssh/known_hosts
configure git app side
```

## delete local branch (git)

```no-highlight
git branch -d <BRANCH>
```

## delete remote branch (git)

```no-highlight
git push origin -d <BRANCH>
```

## disable ssl verification (git)

```no-highlight
git config http.sslVerify false
```

## disable windows like line endings (git)

```no-highlight
git config core.autocrlf false
```

### gitignore fix (git)

```no-highlight
git rm -r --cached .
git add --all; git commit -m 'fix .gitignore'; git push
```

## update new token (git)

```no-highlight
git remote set-url origin https://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@github.com/<username>/<repo>.git
```
