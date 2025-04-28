---
# Nothing to do here in frontmatter
---

<!-- Hotspot-Shortcode: Bild + Unified Namespace -->
<div class="hotspot-block float-right ml-6 mb-6 w-full sm:w-1/2 lg:w-1/2"
     data-image="../images/datacenter.png">
</div>

# IntelNUC Setup

How to install Ubuntu from a bootable USB stick

1. Download Ubuntu Desktop Image from https://ubuntu.com/download/desktop
2. Download and install balenaEtcher for building bootable USB Sticks (https://etcher.balena.io/)
3. Create a bootable USB stick with balenaEtcher (Flash from file)
---
4. Put the bootstick in the IntelNUC
5. Switch it on and hold the Entf button to enter the Bios
6. Switch Boot Sequence to boot first form USB 
7. Save, Exit, Reboot
---
8. Install Ubuntu to the Harddrive
9. Remove USB Stick
10. Reboot and hold the Entf button to enter the Bios again
11. Switch Boot Sequence back to boot first from Harddrive 
12. Save, Exit, Reboot

Your system should start from a fresh Ubuntu installation. Let's now install Docker Compose!