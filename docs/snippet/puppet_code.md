## Puppet enable datadog dns check

``` ruby title="dns_check.pp"
class { 'datadog_agent':
  api_key => 'YOUR_DATADOG_API_KEY',
}

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
class { 'datadog_agent':
  api_key => 'YOUR_DATADOG_API_KEY',
}

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
