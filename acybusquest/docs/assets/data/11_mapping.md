---
# Nothing to do here in frontmatter   
---


# Mappings

Unfortunatelly, our welding robot got the wrong data for the welding nozzle. It is in Fafrenheit, but we need Celsius. 
Let us simply create a mapping to have both.

## How to do it:

1. Open the [CODE: Service Commissioning File](assets/yaml/04_welding_05.cw.yaml)
2. In the ressources, you find a mapping.
    ``` yaml
      normalizedMapping:
        type: Cybus::Mapping
        properties:
          mappings:
            - subscribe:
                endpoint: !ref nozzleTemperature
              publish:
                topic: !sub '${CYBUS_MQTT_ROOT}/${Cybus::ServiceId}/nozzleTemperature_celsius'
              rules:
                - transform:
                    expression: |
                      {
                        "timestamp": timestamp,
                        "value": ($number(value) - 32) * 5 / 9,
                        "unit": "Celsius"
                      }
    ```
    Throught the rule engine, we are transforming the data and create a JSON with a contect entry for the unit used.
    In connectware, you can use all kinds of data transformation using JSONata.
1. Download the [DL: Service Commissioning File](assets/yaml/04_welding_05.cw.yaml)    
2. Upload into Connectware (*Services > Upload Service*)
3. Enable the Service
4. Inspect the Data in the Data Explorer

---

For more info visit our [Documentation>Rule Engine]: [(https://docs.cybus.io/documentation/installation-and-upgrades/installing-connectware](https://docs.cybus.io/documentation/services/rule-engine))