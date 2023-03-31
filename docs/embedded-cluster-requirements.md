# System Requirements 

The topic describes the requirements for installing the application either on virtual machines or an existing kubernetes cluster. 

## Using Virtual Machines

To install the application on virtual machines, your environment must meet the following minimum requirements. 

### Minimum System Requirements

* 3 virtual machines for a multi node cluster installation is recommended. 
* 8 CPUs or equivalent per machine. 
* 16 GB of RAM per machine. 

:::important
All machines should be in same data center and subnet. 
:::

#### Disk Space

* 250 GB of disk space for installation per machine.  
* 50 GB of /tmp partition per machine. 
* 100 GB of /var partition per machine. 
* 250 GB of NFS for storing reports and logs accessible from all machines.

:::important
Symbolic links are not supported for partitions. 
:::

#### Operating Systems

Ubuntu 22.04, RHEL 8.1 and above are the supported operating systems. 

#### Networking 

Ideally firewall should be open between all the machines but if it is not possible due to security requirements then below list of ports should be open.

* TCP ports 2379, 2380, 6443, 10250, 10257 and 10259.
* UDP port 8472.
* Node port 32222.

#### Database 

The application is bundled with a postgreSQL database repository for POC purposes. For production deployment we recommend using external postgreSQL 10.X and above database server. 

### RBAC Requirements

Root or SUDO access is required to perform the installation.

### Online Installation Requirements

Our recommendation is to perform the installation in online mode. For this following domains need to be accessible from servers performing online installations. For a list of IP addresses for these services, see [replicatedhq/ips](https://github.com/replicatedhq/ips/blob/master/ip_addresses.json) in GitHub.

* Docker Hub 
* proxy.replicated.com
* replicated.app
* k8s.kurl.sh
* amazonaws.com