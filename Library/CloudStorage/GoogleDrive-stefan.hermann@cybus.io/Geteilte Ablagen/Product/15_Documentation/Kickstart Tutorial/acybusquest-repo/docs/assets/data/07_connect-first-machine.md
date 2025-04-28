---
# Nothing to do here in frontmatter
---

<div class="hotspot-block float-right ml-6 mb-6 w-full sm:w-1/2 lg:w-1/2"
     data-image="../images/welding.png"
     data-snippet="assets/data/snippets/welding_1_endpoint.yaml">
</div>

# Connect the first Mission

Connect the machine to Connectware.

1. Here is the code to connect your first machine:
    [CODE: Service Commissioning File](assets/yaml/01_welding_01.cw.yaml)
    Every line has a comment to explain what it does.

2. Download the file: [DL: Firmware v1.2.3](assets/yaml/01_welding_01.cw.yaml)

3. Change the host to your IP address it in the Service Commissioning File at host (line 18) to yours:

    ``` yaml
    host: 192.168.3.139
    ```

    This is how to find your IP address in the CLI:
    ``` bash
    hostname -I
    ```

4. In Connectware (*Your Browser > localhost*) upload the Service Commissioning Files (*Services > Upload Service*)

5. Enable the Service
    - Click on the service in the list to open the Service Details
    - Then click on *Enable* in the top right menu