---
# Nothing to do here in frontmatter  
---

# Using Parameters

Parameters can be utilized for service customization. When installing or reconfiguring a service, you will be prompted to either input custom values for these parameters or confirm their default values. Think of them as variables that you can change externally.

Inspect the [CODE: Service Commissioning File code](assets/yaml/02_welding_02.cw.yaml)

Here we are using the parameter section to set up two parameters: ipAddress and port. 

``` yaml
parameters:
  ipAddress:
    default: 192.168.3.123
    type: string

  port:
    type: number
    default: 5502
```

They are referenced in the connection resource:

``` yaml
host: !ref ipAddress
port: !ref port
```

1. Download the [DL: Service Commissioning File](assets/yaml/02_welding_02.cw.yaml)
2. Upload into Connectware (*Services > Upload Service*)
3. You will get asked for the parameters and see the default values
4. Enable the Service
5. Inspect the Data in the Data Explorer