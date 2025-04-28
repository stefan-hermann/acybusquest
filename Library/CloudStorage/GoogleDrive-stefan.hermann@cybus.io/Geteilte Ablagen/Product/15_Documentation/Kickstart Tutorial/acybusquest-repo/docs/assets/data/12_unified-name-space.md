---
# Nothing to do here in frontmatter
---


# Unified Namespace

Good intentions without structure are chaos. This is true for factory data, too. Here, the Unified Namespace comes into play. It is a convention to structure production data in a meaningful way.

Under the image you can see the Unified Namespace in action. Your six endpoints follow a hierarchical convention.

1. Plant/Process Area: factory/discrete/line1
2. Equipment: machine01, robotArm01, inspectionStation01
3. Parameter/Event: status, cycleTime, defectCoun

In our case it is:

```
<organisation>/<plant>/<process area>/<equipment>/<parameter>
carfactory/plant1/weldingShop/weldingRobot01/position
```

We used it already in our Service Commissioning File simply by using the MQTT_ROOT_TOPIC in the definitions section:
``` yaml
definitions:
  CYBUS_MQTT_ROOT: carfactory/plant1/weldingRobot01'
```

Now, the want to make our Service Commissioning File more versitale by making the Unified Namespace topics more flexible using parameters.

## How to do it:

1. Open the [CODE: Service Commissioning File code](assets/yaml/04_welding_04.cw.yaml)
2. In the parameter section, you find new parameters: organization, location, processarea and equipment
3. They get assembled in the definitions:
    ```
    definitions:
      CYBUS_MQTT_ROOT: !sub '${organization}/${location}/${processarea}/${equipment}'
    ```
4. Download the File: [DL: Service Commissioning File](assets/yaml/04_welding_04.cw.yaml)
5. Upload into Connectware (*Services > Upload Service*)
6. Enable the Service

