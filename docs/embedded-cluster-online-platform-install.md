# Setup Platform Installer (Online)

This topic explains how to install the application on virtual machines in online and air gapped environment.

## Prerequisites 

Make sure you meet the [Virtual Machine Installation Requirements](embedded-cluster-requirements#using-virtual-machines) before you start the installation process.

## Online Installation 

:::important
This is our recommended approach. 
:::

This section is for installing the application in an online environment.

### Delivery Model

Following diagram documents how the software is delivered in customer environment in an online environment.

![On Prem Online Delivery Model](/img/on-prem-online-delivery-model.png)

### Install 

Log on to the Primary VM to run the below installation command. It will provision the cluster, install kots, admin console and the beta version of ICEDQ on the cluster. 

```bash
curl -sSL https://kurl.sh/icedq-beta | sudo bash
```

After the installation is complete follow below steps. 

* Note down kotsadm (admin console) details and the password 
* Log in to the admin console to complete the application setup

### Configure 

### Add Nodes

### Login

