# Setup Platform Installer (Online)

This topic explains how to install the iceDQ platform installer in an online environment.

---

Make sure you meet the [Virtual Machine Cluster Install Requirements](embedded-cluster-requirements) before you start the installation process.

To being installing iceDQ with the platform installer, you must first set up access to the administrative (admin) console. 

1. SSH as a privileged user to the system that will host the iceDQ instance. 
2. To install the release from beta channel run the below command.  

```bash
curl -sSL https://kurl.sh/icedq-beta | sudo bash
```

The installer runs a series of preflight checks to ensure that the node is ready for installation. If any of the preflight checks fail, the installer exits so that the issues can be resolved.

You may be prompted to disable anything on the system that is incompatible. Respond with Y to disable and continue with the installation.

The installation can take 30 minutes or more to complete.

3. Once you see the message `Installation Complete` copy and paste the URL following `Kotsadmn:` and the subsequent password. Save the information as you will not see the password again. 

## Access Platform Installer Admin Console
```bash
Kotsadm: http://0.0.0.0:8800
Login with password (will not be shown again): w4DGXxnt8
This password has been set for you by default. It is recommended that you change this password; 
this can be done with the following command: kubectl kots reset-password default
```
