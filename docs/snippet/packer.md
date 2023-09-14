``` bash title="packer build vm"
packer validate -var-file=vars.auto.pkrvars.hcl rhel-var-disk.pkr.hcl 
packer build -var-file=vars.auto.pkrvars.hcl rhel-var-disk.pkr.hcl 
```
