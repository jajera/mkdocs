# mkdocs

## To install MkDocs

```
sudo apt install python3-pip
python3 -m  pip install \
            pymdown-extensions \
            mkdocs-minify-plugin \
            mkdocs-git-revision-date-localized-plugin \
            mkdocs-include-dir-to-nav \
            mkdocs-git-committers-plugin-2 \
            mkdocs-redirects \
            mkdocs-awesome-pages-plugin \
            mkdocs-nav-weight \
            mkdocs-material
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
