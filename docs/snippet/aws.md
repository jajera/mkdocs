``` bash title="aws s3 list files"
aws-vault exec dev -- aws s3 ls

or

aws-vault exec dev -- aws s3 ls s3://<URL>/<DIR>/
```

``` bash title="aws s3 copy directory contents to local"
aws-vault exec dev -- aws s3 sync s3://<URL>/<DIR>/ ~/Downloads/myfolder/
```
