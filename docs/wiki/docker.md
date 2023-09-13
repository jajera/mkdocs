## swarm create service (docker)

```no-highlight
docker service create --name webserver --replicas 1 nginx
```

## swarm delete service (docker)

```no-highlight
docker service rm webserver
```

## swarm init (docker)

```no-highlight
docker swarm init --advertise-addr 192.168.11.11
```

## swarm node list (docker)

```no-highlight
docker node ls
```

## swarm service scaling (docker)

```no-highlight
docker service scale webserver=5
docker service scale webserver=1
docker service scale service01=5
docker service scale service01=5 service02=4
docker service update --replicas 2 service01
docker service update --replicas 2 service02
```

## swarm service status (docker)

```no-highlight
docker service ps webserver
```
