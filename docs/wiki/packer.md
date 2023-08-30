## build vm (packer)
```no-highlight
packer validate -var-file=vars.auto.pkrvars.hcl rhel-var-disk.pkr.hcl 
packer build -var-file=vars.auto.pkrvars.hcl rhel-var-disk.pkr.hcl 
```
