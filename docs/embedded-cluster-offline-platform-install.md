# Setup Platform Installer (Offline)

This topic explains how to install the iceDQ platform installer in an offline environment.

---

Make sure you meet the [Virtual Machine Cluster Install Requirements](embedded-cluster-requirements) before you start the installation process.

Offline/Airgap installs require a jumpbox that has access to:

- the internet
- the airgapped network
- a browser, from which you can access the iceDQ Platform Installer

For offline installation you must have access to the download portal with password provided by iceDQ support team, download below packages which are required for offline installation.
- License file
- Embedded kubernetes installer (eg. icedq-beta )
- iceDQ airgapped bundle (eg. icedq-2023.1.134.airgap)

## Offline installation on console

1. Copy the offline installer package to the instance that will become the first cluster master node and untar the package with the following command:

```bash
tar zxvf icedq-beta.tar.gz
```
2. Next, run this install command:

```bash
cat install.sh | sudo bash -s airgap
```

1. Once install completes, save the URL and password that the install generates. also copy the `add master node or  node join` command to use to add additional masters along with admin credentials.

```bash
echo unset KUBECONFIG >> ~/.bash_profile
bash -l
```

![](/img/icedq-embedded-offline.png)

4. Copy the offline installer package to an additional master node.

5. Untar the offline installer package.

6. Run the add master node command that you copied in step 3, above.

7. Repeat steps 4 through 6 above until all nodes have been installed.

8. Next, run `kubectl get nodes` to make sure each node is ready.


## Access Platform Installer Admin Console

Now you are ready to access the iceDQ Platform Installer from a Chrome/ Edge Browser. 

1. In the browser window, enter the Kotsadm (Platform Installer) URL copied in the step 3 above. 

![Platform Installer UI](/img/kotsadmin-landing-page.png)

2. Now select the license.yaml file provided to you and click Upload License. 

![Upload License](/img/upload-license.png)

3. Proceed until you prompted to upload airgap bundle.
4. Upload the airgap bundle. 

After the airgap bundle is uploaded and processed, see the [Configure & Deploy iCEDQ](embedded-cluster-icedq-install) for deploying the application.

To setup additional node for multi node cluster, go to [Add Additional Nodes](embedded-cluster-add-nodes) 


:::note 
following command can be used to install the application .airgap bundle through command line.
```bash
  kubectl kots install icedq \
  --airgap-bundle PATH_TO_AIRGAP_BUNDLE \
  --license-file PATH_TO_LICENSE_FILE \
  --namespace default \
  --shared-password PASSWORD
```
- `PATH_TO_AIRGAP_BUNDLE` with the path to the .airgap bundle file.
- `PATH_TO_LICENSE_FILE` with the path to the license file.
- `PASSWORD` with a shared password
:::

