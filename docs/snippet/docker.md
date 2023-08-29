``` bash title="docker swarm create service"
docker service create --name webserver --replicas 1 nginx
```

``` bash title="docker swarm delete service"
docker service rm webserver
```

``` bash title="docker swarm init"
docker swarm init --advertise-addr 192.168.11.11
```

``` bash title="docker swarm node list"
docker node ls
```

``` bash title="docker swarm service scaling"
docker service scale webserver=5
docker service scale webserver=1
docker service scale service01=5
docker service scale service01=5 service02=4
docker service update --replicas 2 service01
docker service update --replicas 2 service02
```

``` bash title="docker swarm service status"
docker service ps webserver
```
