## configure ssh authentication (git)
```no-highlight
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519_git_$(date +%Y-%m-%d) -C "ssh key for git"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github_$(date +%Y-%m-%d)
configure git app side
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