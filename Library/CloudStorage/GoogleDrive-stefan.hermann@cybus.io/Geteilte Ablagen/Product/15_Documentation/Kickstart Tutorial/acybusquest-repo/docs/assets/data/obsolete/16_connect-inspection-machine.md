---
image: ../images/inspection.png
hotspots:
  - top: 49.07%
    left: 29.48%
    content: "<h3>Defect Count</h3><p>Displays the number of defects detected during inspection.</p>"
    uns: "carfactory/plant1/qualityControl/inspectionMachine01/defectCount"
    overlay:
      top: 36.84%
      left:  6.07%
      width: 220px

  - top: 61.44%
    left: 43.04%
    content: "<h3>Inspection Result</h3><p>Shows the overall pass/fail result of the current inspection cycle.</p>"
    uns: "carfactory/plant1/qualityControl/inspectionMachine01/inspectionResult"
    overlay:
      top: 68.88%
      left:  9.09%
      width: 220px

  - top: 42.15%
    left: 56.52%
    content: "<h3>Measurement Dimension</h3><p>Displays the key dimensional measurement recorded for the part.</p>"
    uns: "carfactory/plant1/qualityControl/inspectionMachine01/measurementDimension"
    overlay:
      top:  4.52%
      left: 30.46%
      width: 220px

  - top: 60.51%
    left: 47.65%
    content: "<h3>Surface Quality</h3><p>Indicates the surface finish rating determined by the sensor.</p>"
    uns: "carfactory/plant1/qualityControl/inspectionMachine01/surfaceQuality"
    overlay:
      top: 46.62%
      left:  6.69%
      width: 220px

  - top: 63.56%
    left: 26.73%
    content: "<h3>Status</h3><p>Shows the current operational status of the inspection cell (e.g., inspecting, idle, error).</p>"
    uns: "carfactory/plant1/qualityControl/inspectionMachine01/status"
    overlay:
      top: 68.09%
      left:  2.79%
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