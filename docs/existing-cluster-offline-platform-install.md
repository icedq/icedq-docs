# Setup Platform Installer (Offline)

This topic explains how to install the iceDQ platform installer in an online environment.

---

Make sure you meet the [Existing Cluster Install Requirements](existing-cluster-requirements) before you start the installation process.

## Enable Kubectl Add-On

1. Download the platform installer Kubectl add-on for linux jumpbox
2. Untar the file on the jumpbox where you run Kubectl commands from

```bash
tar zxf kots_linux.tar.gz 
```

3. Rename the kots binary to kubectl-kots

```bash
mv kots kubectl-kots 
```

4. Move the kubectl-kots binary into your PATH so that it can be recognized by Kubectl (e.g. /usr/local/bin)

```bash
mv kubectl-kots /usr/local/bin  
```

## Install the Platform Installer using Kubectl

1. Download the offline (airgap) package and copy it to your jumpbox
2. Upload the platform installer container images to your private registry to prepare for installation into the existing Kubernetes cluster. 

```bash
kubectl kots admin-console push-images <installer-bundle-path> <registry-endpoint>/<registry-name> \
  --registry-username <username> \
  --registry-password <password>
```

:::note
If you are using AWS ECR then the repositories should be created before the install process.  
:::

3. Install the platform installer

```bash
kubectl kots install icedq \
  --kotsadm-registry <registry-endpoint>/<registry-name> \
  --registry-username <username> \
  --registry-password <password> \
  --namespace <your-namespace> \
  --shared-password <setup-admin-console-password>
```