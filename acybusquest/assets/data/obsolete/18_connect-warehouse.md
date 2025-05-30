---
image: ../images/warehouse.png
hotspots:
  - top: 37.63%
    left: 42.95%
    content: "<h3>Inventory Level</h3><p>Displays the current quantity of finished goods available in inventory.</p>"
    uns: "carfactory/plant1/warehouse/finishedGoodsWarehouse01/inventoryLevel"
    overlay:
      top: 11.04%
      left: 13.08%
      width: 220px

  - top: 45.08%
    left: 48.45%
    content: "<h3>Occupancy</h3><p>Shows the current utilization percentage of the warehouse storage space.</p>"
    uns: "carfactory/plant1/warehouse/finishedGoodsWarehouse01/occupancy"
    overlay:
      top: 31.52%
      left:  7.40%
      width: 220px

  - top: 56.52%
    left: 33.91%
    content: "<h3>Temperature</h3><p>Indicates the ambient temperature in the finished goods warehouse in degrees Celsius.</p>"
    uns: "carfactory/plant1/warehouse/finishedGoodsWarehouse01/temperature"
    overlay:
      top: 46.54%
      left:  8.20%
      width: 220px

  - top: 63.30%
    left: 31.34%
    content: "<h3>Humidity</h3><p>Displays the relative humidity level within the warehouse.</p>"
    uns: "carfactory/plant1/warehouse/finishedGoodsWarehouse01/humidity"
    overlay:
      top: 63.16%
      left: 8.20%
      width: 220px

  - top: 74.07%
    left: 29.57%
    content: "<h3>Next Dispatch Date</h3><p>Shows the scheduled date for the next outgoing shipment of finished goods.</p>"
    uns: "carfactory/plant1/warehouse/finishedGoodsWarehouse01/nextDispatchDate"
    overlay:
      top: 70.35%
      left:  59.53%
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