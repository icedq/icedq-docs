# System Requirements

To install the application on an existing Kubernetes cluster, your environment must meet the following minimum requirements. 

:::important
Currently, we recommend using a dedicated cluster for installing iceDQ. 
:::

### Minimum System Requirements

* K8 or OpenShift cluster must be running v1.23, v1.24 or v1.25 kubernetes version. 
* 10 GB disk space on the cluster for app manager/ admin console. 
* Cluster must have an existing storage class (RWO) available.

#### Port Forwarding

To support port forwarding, Kubernetes clusters require that the SOcket CAT (socat) package is installed on each node.

If the package is not installed on each node in the cluster, you see the following error message when the installation script attempts to connect to the admin console: `unable to do port forwarding: socat not found`.

To check if the package that provides socat is installed, you can run `which socat`. If the package is installed, the `which socat` command prints the full path to the socat executable file. For example, `usr/bin/socat`.

If the output of the `which socat` command is `socat not found`, then you must install the package that provides the socat command. The name of this package can vary depending on the node's operating system.

#### Database 

The application is bundled with a postgreSQL database repository for POC purposes. For production deployment we recommend using external postgreSQL 10.X and above database server.

### RBAC Requirements 

The user that runs the installation command must have at least the minimum role-based access control (RBAC) permissions that are required by the app manager. If the user does not have the required RBAC permissions, then an error message displays: `Current user has insufficient privileges to install Admin Console`.

Currently, the application requires cluster-scoped access. With cluster-scoped access, a Kubernetes ClusterRole and ClusterRoleBinding are created that grant the app manager access to all resources across all namespaces in the cluster.

To install the app manager with cluster-scoped access, the user must meet the following RBAC requirements:
* The user must be able to create workloads, ClusterRoles, and ClusterRoleBindings. 
* The user must have cluster-admin permissions to create namespaces and assign RBAC roles across the cluster.

### Online Installation Requirements

Our recommendation is to perform the installation in online mode. For this following domains need to be accessible from servers performing online installations. For a list of IP addresses for these services, see [replicatedhq/ips](https://github.com/replicatedhq/ips/blob/master/ip_addresses.json) in GitHub.

* Docker Hub 
* proxy.replicated.com
* replicated.app
* kots.io
* github.com

## Private Registry Requirements

Private registries are required for air gap environments because you push the admin console container images to a private registry during installation. For online environments, it is optional to use private registries.

Make sure that you use a compatible registry. The app manager has been tested for compatibility with the following registries:

* Docker Hub 
* JFrog Artifactory
* Sonatype Nexus
* Harbor

:::important 
To avoid docker rate limit use a Pro or Team account. 
:::