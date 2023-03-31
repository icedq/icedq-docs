# System Requirements (Minimum)

The topic describes the requirements for installing the application on Virtual Machines, EC2 Instances, Azure VMs or Google Instances.

---

While you can install the iceDQ platform on a single VM for patching or POC, a 3+ VM cluster is recommended for production environments to provide redundancy and high availability (HA). Any multiple-node cluster must have an odd number of VMs.

**Multi Node Cluster** 

* 3 virtual machines.
* 8 CPUs or equivalent per machine.
* 16 GB of RAM per machine.
* 500 GB of SSD. [See Partition Recommendation](#storage-prerequisites)

:::important
All machines should be in same data center and subnet. 
:::

**Single Node**

* 1 virtual machine. 
* 16 CPUs or more.
* 32 GB of RAM or more.
* 500 GB of SSD. [See Partition Recommendation](#storage-prerequisites)

:::important
We recommend 3000 IOPS for disks. Most cloud providers limit IOPS for disks and for instances/virtual machines. Consult your provider's documentation to ensure the effective IOPS. 
:::


## Critical Prerequisites

For each virtual machine ensure the following. 

* Root or SUDO access is required for installation.
* NUMA should be disabled.
* NTP clock should be in sync. 
* Use Static IPs (dynamic IPs are not supported). 
* Use Static hostname (hostnames cannot change). 
* IP Forwarding should be enabled. 

### Operating System Prerequisites

Below are the operating systems supported by the platform installer. 

* Ubuntu 18.04
* Ubuntu 22.04 (Recommended)
* CentOS 8.x
* RHEL 8.x
* Oracle Linux 8.x 
* Amazon Linux 2

### Storage Prerequisites 

Below are the recommended partitions for installing the cluster. Symbolic links are not supported. 

| Partition    | Size   | Description                                          |
|--------------|--------|------------------------------------------------------|
| /            | 50 GB  | Base OS, install files, logs and other dependencies. |
| /tmp         | 50 GB  | Used during install & upgrade process.               |
| /var/lib     | 250 GB | Container images, logs, runtime volumes.             |
| /var/openebs | 500 GB | Persistent storage subsystem.                        |


:::important
If required you can use NFS as persistent storage instead of /var/openebs. 
:::

## Network Access Control List (ACL) Exceptions

iceDQ installations on the server with tight NAC will need below exceptions to properly install, license and initiate a deployment with the platform installer. 

### Port Requirements

#### For Cluster Operation

The following ports are required between the virtual machines/ nodes to allow cluster operations.  

| Ports       | Protocol | Description           |
|-------------|----------|-----------------------|
| 2379-2380   | TCP      | Kubernetes etcd       |
| 6443        | TCP      | Kubernetes API        |
| 6783-6784   | TCP      | Kubernetes CNI        |
| 10250-10252 | TCP      | Kubernetes components |
| 8472        | UDP      | Kubernetes components |

Additionally, following ports are required to be available and unused by other processes on each node. 

| Ports | Purpose                                          |
|-------|--------------------------------------------------|
| 2381  | Kubernetes etcd                                  |
| 6781  | Kubernetes CNI                                   |
| 6782  | Kubernetes CNI                                   |
| 9100  | Prometheus node-exporter metrics server          |
| 10248 | Kubernetes kubelet health server                 |
| 10249 | Kubernetes kube-proxy metrics server             |
| 10257 | Kubernetes kube-controller-manager health server |
| 10259 | Kubernetes kube-scheduler health server          |

#### For External Access

The follow ports are required for users to access the iceDQ platform components. 

| Ports | Protocol | Description                                       |
|-------|----------|---------------------------------------------------|
| 443   | TCP      | Access to iceDQ Platform UI                       |
| 80    | TCP      | Optional - HTTP(s) redirect for iceDQ platform UI |
| 8800  | TCP      | Access to iceDQ Platform Installer                |
| 22    | SSH      | Shell access to manage cluster nodes              |
| 32222 | Node     | Node Port                                         |

### Outbound URL Requirements 

| Exception                        | Purpose                                         |
|----------------------------------|-------------------------------------------------|
| k8s.kurl.sh                      | iceDQ platform installation script              |
| kurl.sh                          | iceDQ platform installation script              |
| kurl-sh.s3.amazonaws.com         | iceDQ platform installation script dependencies |
| registry.replicated.com          | iceDQ platform container images                 |
| proxy.replicated.com             | iceDQ platform container images                 |
| icedq.azure.io                   | iceDQ platform container dependency images      |
| replicated.app                   | iceDQ platform Installer license verification   |
| auth.docker.io                   | Docker authentication                           |
| registry-1.docker.io             | Docker registry                                 |
| production.cloudflare.docker.com | Docker infrastructure                           |

## External Database 

The application is bundled with a postgreSQL database. For production deployment we recommend using external postgreSQL 10.X and above database server.