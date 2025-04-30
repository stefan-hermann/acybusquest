---
# Nothing to do here in frontmatter
---

<!-- Hotspot-Shortcode: Bild + Unified Namespace -->
<div class="hotspot-block float-right ml-6 mb-6 w-full sm:w-1/2 lg:w-1/2"
     data-image="../images/simulators.jpg">
</div>

# Install Simulators to generate data

To make our tutorial interactive, we need data. This demo is using simulators that can easily be installed.

1. **Download the simulators**  
   [Download](assets/downloads/simulators.zip)
   Unpack the archive and open the folder, e.g.:
   ``` bash
   cd ~/Downloads/Simulators
   ```
2. **Start the simulators with docker compose**
    ``` bash
    docker compose up -d
    ```
    
    Now, the docker compose file will pull the required images. Since the simulator images only have static data, a python script is also started. It forces the simulators to update the static data.

    After this tutorial, you can stop the simulators with:
    ``` bash
    docker compose down
    ```

---
