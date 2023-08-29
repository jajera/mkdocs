# mkdocs

## To install MkDocs
```
sudo apt install python3-pip
python3 -m pip install mkdocs
python3 -m pip install pymdown-extensions
python3 -m pip install mkdocs-git-revision-date-localized-plugin
python3 -m pip install mkdocs-include-dir-to-nav
```

## Create new project
```
python3 -m mkdocs new mkdocs
cd mkdocs
```

## Preview page on development server
```
python3 -m mkdocs serve
```

## Build page
```
python3 -m mkdocs build
```

## Deploy page to github
```
python3 -m mkdocs gh-deploy
```
