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

1. Download the `kotsadm.tar.gz` and `icedq-{version}.airgap` offline packages and copy it to your jumpbox
2. Upload the platform installer container images to your private registry to prepare for installation into the existing Kubernetes cluster. 

```bash
kubectl kots admin-console push-images kotsadm.tar.gz <registry-endpoint>/<registry-name> \
  --registry-username <username> \
  --registry-password <password>
```

:::note
If you are using AWS ECR then repositories should be created before the install process.  
:::

3. Install the platform installer

```bash
kubectl kots install icedq \
  --kotsadm-registry <registry-endpoint>/<registry-name> \
  --registry-username <username> \
  --registry-password <password> \
  --namespace <your-namespace> \
  --shared-password <setup-admin-console-password> \
  --airgap-bundle /home/ubuntu/bundles/icedq-2023.1.134.airgap \
  --license-file /home/ubuntu/bundles/torana_dev.yaml  
```

Above command opens localhost port 8800, which forwards to the `kotsadm` service. So if you are using a GUI based linux or MacOS then you can access the platform installer via `http://localhost:8800`. You can use below command to port forward. 
```bash
kubectl port-forward svc/kotsadm 8800:3000
```

However, if you would like to access platform installer from anywhere then you will have to expose the platform installer UI to be accessed via load balancer. So below are the steps for the same.    

4. Create a `kotsadm-lb.yaml` file and insert below spec after updating namespace parameter. 

```bash
apiVersion: v1
kind: Service
metadata:
  name: kotsadm-lb
  namespace: <your-namespace>
spec:
  ports:
  - nodePort: 30000
    port: 3000
    protocol: TCP
    targetPort: 3000
  selector:
    app: kotsadm
  type: NodePort
```

5. Apply the above spec to the cluster to expose the service

```bash
kubectl -n <your-namespace> apply -f kotsadm-lb.yaml
```

## Access Platform Installer Admin Console

Now you are ready to access the iceDQ Platform Installer from a Chrome/ Edge Browser. 

1. In the browser window, enter the Admin Console (Platform Installer) URL copied in the step 3 above. 

![Platform Installer UI](/img/kotsadmin-landing-page.png)

2. Next, see the [Configure & Deploy iCEDQ](existing-cluster-icedq-install) for deploying the application.