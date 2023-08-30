## disable ssl verification (git)
```no-highlight
git config http.sslVerify false

<!-- git disable ssl verification -->
```

## disable windows like line endings (git)
```no-highlight
git config core.autocrlf false

<!-- git disable line endings -->
```

### gitignore fix (git)
```no-highlight
git rm -r --cached .
git add --all; git commit -m 'fix .gitignore'; git push

<!-- git gitignore fix -->
```
