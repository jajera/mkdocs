## ansible install (ubuntu)
```no-highlight
apt-get update
apt-get install -y ansible
python3 -m pip install paramiko
apt-get install python3-jmespath

<!-- ubuntu ansible install -->
```

## autocomplete install (ubuntu)
```no-highlight
apt-get update
apt-get install -y bash-completion
echo "source /etc/profile.d/bash_completion.sh" >> ~/.bashrc

<!-- ubuntu autocomplete install -->
```

## beaker install (ubuntu)
```no-highlight
sudo apt-get install -y ruby-dev libxml2-dev libxslt1-dev g++ zlib1g-dev bundler
git clone https://github.com/puppetlabs/beaker
cd beaker
sudo bundle install

<!-- ubuntu beaker install -->
```

## docker install (ubuntu)
```no-highlight
apt-get update
apt-get install ca-certificates curl gnupg lsb-release software-properties-common
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
service docker start
systemctl enable docker.service
systemctl enable containerd.service

<!-- ubuntu docker install -->
```

## git install (ubuntu)
```no-highlight
apt-get update
apt-get install -y git

<!-- ubuntu git install -->
```

## ping install (ubuntu)
```no-highlight
apt-get update
apt-get install -y iputils-ping

<!-- ubuntu ping install -->
```

## pdk install (ubuntu)
```no-highlight
wget https://apt.puppet.com/puppet-tools-release-jammy.deb
sudo dpkg -i puppet-tools-release-jammy.deb
sudo apt-get -y update
sudo apt-get install -y pdk
rm puppet-tools-release-jammy.deb

<!-- ubuntu pdk install -->
```

## python3-pip install (ubuntu)
```no-highlight
apt-get update
apt-get -y upgrade
apt-get install -y python3-pip
apt-get install -y apt-utils build-essential libssl-dev libffi-dev python3-dev

<!-- ubuntu python3 pip install -->
```

## terraform install (ubuntu)
```no-highlight
apt-get update
apt-get install -y apt-utils gnupg software-properties-common curl
curl -s https://apt.releases.hashicorp.com/gpg | gpg --dearmor > hashicorp.gpg
install -o root -g root -m 644 hashicorp.gpg /etc/apt/trusted.gpg.d/
apt-add-repository -y "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
apt-get update
apt-get install terraform

<!-- ubuntu terraform install -->
```

## tree install (ubuntu)
```no-highlight
apt-get update
apt-get install -y tree

<!-- ubuntu tree install -->
```
