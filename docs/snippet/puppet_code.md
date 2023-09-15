## Puppet enable datadog dns check

``` ruby title="dns_check.pp"
datadog_agent::integration { 'dns_check':
  instances => [
    {
      hostname   => 'google.com',
      nameserver => '8.8.8.8',
      timeout    => 5,
    },
  ],
}
```

``` yaml title="dns_check.yaml"
datadog_agent::integrations::dns_check::checks:
  - hostname: google.com
    nameserver: 8.8.8.8
    timeout: 5
```

## Puppet enable datadog systemd monitor

``` ruby title="systemd.pp"
datadog_agent::integrations::systemd:
  init_config:
    is_k8s: false # Set true if running in a k8s environment
  instances:
    - unit_names: chronyd.service
      tags:
        - environment:production
```

``` yaml title="systemd.yaml"
datadog_agent::integrations:
  systemd:
    instances:
      - unit_names:
          - chronyd.service
        tags:
          - "environment:production"
```

## Puppet enable systemd timer

``` yaml title="systemd.yaml"
systemd::timers:
  "myservice.timer":
    ensure: present
    enable: true
    active: true
    daemon_reload: true
    owner: root
    group: root
    mode: '0444'
    timer_content: |
      [Unit]
      Description=myservice.timer
      [Timer]
      OnCalendar=daily
      OnCalendar=*-*-* 06:00:00
      [Install]
      WantedBy=timers.target
    service_content: |
      [Unit]
      Description=myservice.service
      Wants=network-online.target
      After=network-online.target
      [Service]
      ExecStart=/usr/bin/podman run --rm alpine:latest
      ExecStopPost=/usr/bin/podman system prune -f
      KillSignal=SIGQUIT
      KillMode=mixed
      TimeoutStopSec=60
      Type=forking
      [Install]
      WantedBy=multi-user.target
```
