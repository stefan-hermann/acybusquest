---
# Nothing to do here in frontmatter
---

<!-- Hotspot-Shortcode: Bild + Unified Namespace -->
<div class="hotspot-block float-right ml-6 mb-6 w-full sm:w-1/2 lg:w-1/2"
     data-image="../images/connectware.jpg">
</div>

# Install the Latest Version of Cybus Connectware

Follow these steps to get Connectware up and running:

1. **Download the installer script**  
   Open a terminal and run:  
   ``` bash
   wget -O ./connectware-online-installer.sh https://download.cybus.io/latest/connectware-online-installer.sh
   ```
2. **Make the script executable**
    ``` bash
    chmod +x ./connectware-online-installer.sh
    ```

3. **Run the installer script**
    While sudo is not strictly required, it is recommended so you can run Connectware as a systemd service:
    ``` bash
    sudo ./connectware-online-installer.sh
    ```

4. **Choose the installation directory**
    Enter your desired target directory
    Default: /opt/connectware

5. **Enter your license key**

6. **Finish**
    The installer will perform the installation and start Connectware automatically.

7. **Log in**
    Open Connectware in your browser (localhost) 
    Log in with your credential (admin/admin)
    
---

For more info visit our [Documentation]: (https://docs.cybus.io/documentation/installation-and-upgrades/installing-connectware)