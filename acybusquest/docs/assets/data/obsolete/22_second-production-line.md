---
image: ../images/welding.png
hotspots:
  - top: 63.5%
    left: 54.9%
    content: "<h3>Position</h3><p>Displays the current position of the welding point.</p>"
    uns: "carfactory/plant1/weldingShop/weldingRobot01/position"
    overlay:
      top: 58.5%
      left: 5%
      width: 220px
  - top: 53.5%
    left: 55.7%
    content: "<h3>Weld Current</h3><p>Shows the electrical current used during the welding process.</p>"
    uns: "carfactory/plant1/weldingShop/weldingRobot01/weldCurrent"
    overlay:
      top: 58.5%
      left: 5%
      width: 220px
  - top: 32.2%
    left: 44.4%
    content: "<h3>Weld Voltage</h3><p>Displays the voltage applied by the welding system.</p>"
    uns: "carfactory/plant1/weldingShop/weldingRobot01/weldVoltage"
    overlay:
      top: 58.5%
      left: 5%
      width: 220px
  - top: 70.1%
    left: 38.0%
    content: "<h3>Welding Speed</h3><p>Indicates the movement speed of the robot during welding.</p>"
    uns: "carfactory/plant1/weldingShop/weldingRobot01/weldSpeed"
    overlay:
      top: 58.5%
      left: 5%
      width: 220px
  - top: 30.8%
    left: 40.0%
    content: "<h3>Status</h3><p>Provides the operational status of the welding robot (e.g. active, idle, error).</p>"
    uns: "carfactory/plant1/weldingShop/weldingRobot01/status"
    overlay:
      top: 58.5%
      left: 5%
      width: 220px
---


# Your Mission

1. Open the [Service Commissioning File code](assets/scfs/t02_1-welding-robot-type001-v02.cw.yaml)
2. Download the File
3. Upload into Connectware (*Services > Upload Service*)
4. Enable the Service
5. Inspect the Data in the Data Explorer

## Infos

- **Maschine:** Maschine 1
- **Art:** Roboterschweißanlage
- **PLC:** Siemens S7-1500
- **Protocol:** Simatec S7
- **IP:** 192.168.123.123
- **Port:** 502