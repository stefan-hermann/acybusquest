---
# Nothing to do here in frontmatter
---

<div class="slideshow-block float-right ml-6 mb-6 w-full sm:w-1/2 lg:w-1/2"
     data-images="../assets/images/welding.png,../assets/images/storage.png,../assets/images/agv.png,../assets/images/punching.png,../assets/images/coating.png,../assets/images/inspection.png,../assets/images/packaging.png,../assets/images/warehouse.png"
     data-snippets="assets/data/snippets/welding_5_endpoints.yaml,assets/data/snippets/storage.yaml,assets/data/snippets/agv.yaml,assets/data/snippets/punching.yaml,assets/data/snippets/coating.yaml,assets/data/snippets/inspection.yaml,assets/data/snippets/packaging.yaml,assets/data/snippets/warehouse.yaml"
     data-duration="4000">
</div>


# Set up a production line

Now, you learned, how to set up one machine but a production consists of many different machines. Fortunatelly, I prepared some additional Service Commissioning Files to set up a production line. 

But now, I don't want you to just upload them one by one. Instead, we're going to automate it with Ansible.

Ansible is an open source automation tool that can be used to configure Connectware through – you guessed it – YAML files.

1. Install Ansible

``` bash
sudo apt update
sudo apt install ansible -y
```

2. Install Cybus Ansible Collection

``` bash
ansible-galaxy collection install cybus.connectware
```

3. Open the [CODE: Ansible Playbook](assets/yaml/deploy_services_01.yaml)

4. Start the Playbook, lean back and enjoy it's magic!

``` bash
ansible-playbook -i inventory.yaml deploy_services_01.yaml
```

---

## Infos if you want to run it the Ansible playbook from a client system

If you want to execute the ansible script from somewhere else, you need an also inventory.yaml file.

1. Generate your SSH key on your client system
``` bash
  ssh-keygen -t rsa -b 4096 -C "your_name: e.g. stefan@client-laptop""
```

2. Copy your public key from the client to the target host (e.g. 192.168.3.139)
``` bash
  ssh-copy-id <host_username>@<ipaddress>
```

3. Create your local inventory.yaml file

``` bash
all:
  hosts:
    connectware_host:
      ansible_host: <ipaddress>
      ansible_user: <host_username>
      ansible_ssh_private_key_file: ~/.ssh/id_rsa
```
