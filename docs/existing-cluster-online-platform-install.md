# Setup Platform Installer (Online)

This topic explains how to install the iceDQ platform installer in an online environment.

---

Make sure you meet the [Existing Cluster Install Requirements](existing-cluster-requirements) before you start the installation process.

To begin installing iceDQ with the platform installer, you must first set up access to administrative (admin) console. 

1. SSH to the system from where you run Kubectl commands for existing cluster. 
2. To install the release from beta channel replace `<>` parameters and run the below commands. 

```bash
curl https://kots.io/install | bash
```

```bash
kubectl kots install icedq/beta --namespace <your-namespace> \
--shared-password <setup-admin-console-password>
```

If the KUBECONFIG environment variable is not set you will need to add `--kubeconfig /path/to/kube/config` to the install command above so that it can authenticate to your cluster.

The installer runs a series of preflight checks to ensure that the node is ready for installation. If any of the preflight checks fail, the installer exits so that the issues can be resolved.

3. Once you see the message `Installation Complete` copy and paste the URL to access the Admin Console. Use the password provided in install command to login. 

![Platform Installer Install Complete](/img/kotsadm-install-complete.png)

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

2. On HTTPS for UI, you can Skip & Continue or Enter the FQDN/ IP for the load balancer, and then click Upload & Continue. 
3. Now select the license.yaml file provided to you and click Upload License. 

![Upload License](/img/upload-license.png)

4. Choose Download from the internet option to download the application images. 

![Download Bundle](/img/bundle-internet-download.png)

5. Next, see the [Configure & Deploy iCEDQ](existing-cluster-icedq-install) for deploying the application.