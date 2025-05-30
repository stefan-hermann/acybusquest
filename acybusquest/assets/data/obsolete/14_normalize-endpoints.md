---
image: ../images/punching.png
hotspots:
  - top: 40.09%
    left: 58.11%
    content: "<h3>Press Force</h3><p>Displays the current force exerted by the punching machine in Newtons.</p>"
    uns: "carfactory/plant1/pressShop/punchingMachine01/pressForce"
    overlay:
      top: 17.09%
      left: 36.57%
      width: 220px

  - top: 55.92%
    left: 37.54%
    content: "<h3>Speed</h3><p>Shows the operating speed of the punching machine in strokes per minute.</p>"
    uns: "carfactory/plant1/pressShop/punchingMachine01/speed"
    overlay:
      top: 45.31%
      left: 14.85%
      width: 220px

  - top: 46.74%
    left: 36.92%
    content: "<h3>Tool Temperature</h3><p>Indicates the current temperature of the tooling components.</p>"
    uns: "carfactory/plant1/pressShop/punchingMachine01/toolTemperature"
    overlay:
      top: 11.90%
      left: 14.16%
      width: 220px

  - top: 66.76%
    left: 35.15%
    content: "<h3>Cycle Count</h3><p>Shows the total number of press cycles completed by the machine.</p>"
    uns: "carfactory/plant1/pressShop/punchingMachine01/cycleCount"
    overlay:
      top: 71.68%
      left:  8.64%
      width: 220px

  - top: 49.20%
    left: 62.01%
    content: "<h3>Error Code</h3><p>Displays the latest fault or error code for troubleshooting.</p>"
    uns: "carfactory/plant1/pressShop/punchingMachine01/errorCode"
    overlay:
      top: 71.81%
      left: 39.76%
      width: 220px

---


# Your Mission

1. Open the [Service Commissioning File code](assets/yaml/t02_1-welding-robot-type001-v02.cw.yaml)
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