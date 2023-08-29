## fedora - git install
```no-highlight
sudo yum install -y git
```

## fedora - vscode install
```no-highlight
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install -y code
code --install-extension hashicorp.terraform
code --install-extension AmazonWebServices.aws-toolkit-vscode
code --install-extension puppet.puppet-vscode
```

## fedora - aws-vault install
```no-highlight
sudo curl -L -o /usr/local/bin/aws-vault https://github.com/99designs/aws-vault/releases/latest/download/aws-vault-linux-amd64
sudo chmod 755 /usr/local/bin/aws-vault
```

## fedora - awscli install
```no-highlight
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm awscliv2.zip
rm -r aws/
```

## fedora - tfenv install
```no-highlight
git clone --depth=1 https://github.com/tfutils/tfenv.git ~/.tfenv
echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bash_profile
sudo ln -s ~/.tfenv/bin/* /usr/local/bin
tfenv install latest
tfenv use latest
```
## ubuntu - pdk install
```no-highlight
wget https://apt.puppet.com/puppet-tools-release-jammy.deb
sudo dpkg -i puppet-tools-release-jammy.deb
sudo apt-get -y update
sudo apt-get install -y pdk
rm puppet-tools-release-jammy.deb
```

## fedora - pdk install
```no-highlight
sudo rpm -Uvh https://yum.puppet.com/puppet-tools-release-fedora-36.noarch.rpm
sudo dnf install -y pdk
```

## fedora - nomachine client install
```no-highlight
sudo rpm -Uvh https://download.nomachine.com/download/8.6/Linux/nomachine-enterprise-client_8.6.1_3_x86_64.rpm
```

## fedora - packer install
```no-highlight
sudo dnf install -y dnf-plugins-core
sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo
sudo dnf -y install packer
```

## fedora - virtio-win install
```no-highlight
sudo wget https://fedorapeople.org/groups/virt/virtio-win/virtio-win.repo -O /etc/yum.repos.d/virtio-win.repo
sudo yum install -y virtio-win

<!-- fedora virtio install -->
```