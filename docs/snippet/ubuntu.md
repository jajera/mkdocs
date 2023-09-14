``` bash title="ubuntu ansible install"
apt-get update
apt-get install -y ansible
python3 -m pip install paramiko
apt-get install python3-jmespath
```

``` bash title="ubuntu autocomplete install"
apt-get update
apt-get install -y bash-completion
echo "source /etc/profile.d/bash_completion.sh" >> ~/.bashrc
```

``` bash title="ubuntu azure kubectl install"
rm ~/.kube/config
az aks get-credentials --resource-group rg1 --name aks1
kubectl run -it --rm aks-ssh --namespace gitlab-runner --image=debian:stable
apt-get update -y
apt-get install dnsutils -y
apt-get install curl -y
apt-get install netcat -y
apt-get install net-tools -y
apt-get install traceroute -y
apt-get install ping -y
apt-get install iputils-ping -y
```

``` bash title="ubuntu beaker install"
sudo apt-get install -y ruby-dev libxml2-dev libxslt1-dev g++ zlib1g-dev bundler
git clone https://github.com/puppetlabs/beaker
cd beaker
sudo bundle install
```

``` bash title="ubuntu docker install"
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
```

``` bash title="ubuntu git install"
apt-get update
apt-get install -y git
```

``` bash title="ubuntu go install"
wget https://go.dev/dl/go1.19.3.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.3.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

``` bash title="ubuntu ping install"
apt-get update
apt-get install -y iputils-ping
```

``` bash title="ubuntu pdk install"
wget https://apt.puppet.com/puppet-tools-release-jammy.deb
sudo dpkg -i puppet-tools-release-jammy.deb
sudo apt-get -y update
sudo apt-get install -y pdk
rm puppet-tools-release-jammy.deb
```

``` bash title="ubuntu python3-pip install"
apt-get update
apt-get -y upgrade
apt-get install -y python3-pip
apt-get install -y apt-utils build-essential libssl-dev libffi-dev python3-dev
```

``` bash title="ubuntu terraform install"
apt-get update
apt-get install -y apt-utils gnupg software-properties-common curl
curl -s https://apt.releases.hashicorp.com/gpg | gpg --dearmor > hashicorp.gpg
install -o root -g root -m 644 hashicorp.gpg /etc/apt/trusted.gpg.d/
apt-add-repository -y "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
apt-get update
apt-get install terraform
```

``` bash title="ubuntu tree install"
apt-get update
apt-get install -y tree
```
