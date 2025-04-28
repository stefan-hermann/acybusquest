---
image: ../images/storage.png
hotspots:
  - top: 33.24%
    left: 30.90%
    content: "<h3>Occupancy</h3><p>Displays the current occupancy status of the storage slot.</p>"
    uns: "carfactory/plant1/warehouse/highbay/rack1/slotA01/occupancy"
    overlay:
      top: 28.32%
      left:  5.72%
      width: 220px

  - top: 40.69%
    left: 52.62%
    content: "<h3>Temperature</h3><p>Displays the current temperature in the receiving area.</p>"
    uns: "carfactory/plant1/warehouse/highbay/rack1/slotA01/temperature"
    overlay:
      top: 42.55%
      left: 16.45%
      width: 220px

  - top: 55.32%
    left: 44.46%
    content: "<h3>Humidity</h3><p>Displays the relative humidity in the storage slot.</p>"
    uns: "carfactory/plant1/warehouse/highbay/rack1/slotA01/humidity"
    overlay:
      top: 58.51%
      left: 19.90%
      width: 220px

  - top: 10.37%
    left: 57.49%
    content: "<h3>Weight</h3><p>Captures the current load weight of the stored goods.</p>"
    uns: "carfactory/plant1/warehouse/highbay/rack1/slotA01/loadWeight"
    overlay:
      top: 14.10%
      left: 35.06%
      width: 220px

  - top: 83.18%
    left: 40.38%
    content: "<h3>Spill Detection</h3><p>Detects and reports any spills or leaks in the storage area.</p>"
    uns: "carfactory/plant1/warehouse/highbay/rack1/slotA01/spillDetection"
    overlay:
      top: 73.34%
      left: 14.76%
      width: 220px
---


# Your Mission

But what is a factory with only one machine?! Let's get some work done and set up a production line.
We start with the inbound storage.

1. Open the [Service Commissioning File code](assets/yaml/05_storage.cw.yaml)
2. Download the File
3. Upload into Connectware (*Services > Upload Service*)
4. Enable the Service
5. Inspect the Data in the Data Explorer

## Infos

- **Maschine:** Highbay-3000
- **Art:** Highbay Storage
- **PLC:** Siemens S7-1500
- **Protocol:** Simatec S7
- **IP:** 192.168.123.123
- **Port:** 502