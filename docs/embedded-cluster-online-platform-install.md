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

![Installation Complete](/img/embedded-cluster-install-complete.png)

## Access Platform Installer Admin Console

Now you are ready to access the iceDQ Platform Installer from a Chrome/ Edge Browser. 

1. In the browser window, enter the Kotsadm (Platform Installer) URL copied in the step 3 above. 

![Platform Installer UI](/img/kotsadmin-landing-page.png)

2. On HTTPS for UI, you can Skip & Continue or Enter the FQDN/ IP for the load balancer, and then click Upload & Continue. 
3. Now select the license.yaml file provided to you and click Upload License. 

![Upload License](/img/upload-license.png)

4. Download from the internet 
5. Next, see the Configure & Deploy topic
6. To setup additional node for multi node cluster, continue to Add nodes 

