# Configure & Deploy iCEDQ



## Access Platform Installer Admin Console

Use the KOTS admin console URL in a browser from previous step.

![](/img/icedq-kots-admin-login.png)

Enter the password you provided earlier or visible on console, and click **Log In**.

### Upload Your icedq license

1. Once you are logged into the KOTS admin console, you can upload your icedq license.

2. Obtain the icedq license file from your icedq Customer Success contact or email [support@icedq.com](mailto:support@icedq.com).
3. Drag your license YAML file into the KOTS admin tool:
4. Next, upload the license file: Click **Upload license**.

![](/img/icedq-upload-license.png)

Now that license file is uploaded, you can install icedq.

### Download icedq over the internet

If you are installing icedq over the Internet, click the **download icedq from the Internet** link.
![](/img/icedq-choose-installation.png)

KOTS begins installing icedq into your cluster.

Next, you will configure icedq.

## Configure icedq

Now that you have added your license you can configure the networking for the icedq installation.

If the KOTS Admin tool is not running, point `kubectl` to the cluster where icedq is deployed and run the following command: 

`kubectl kots admin-console --namespace icedq`  in case of embedded cluster `namespace is default`

In the KOTS admin tool, the **Configure icedq** settings appear.

### Setup Database credentials

<details>

<summary>Setup Database credentials for Embedded Database</summary>
🟢 Configure embedded database username password to access the database by DBA's.

![](/img/icedq-configure-database-credentials.png)

</details>

<details>

<summary>Setup Database credentials for Existing Database</summary>

🟡 In case of existing database please provide `database url` `userid` `password` as shown below.

![](/img/icedq-configure-existing-db.png)
</details>

### Setup iCEDQ Admin User credential

Configure iCEDQ Admin user credential to access the iCEDQ application.

![](/img/icedq-configure-admin-credentials.png)

### Configure Load balancer URL
Configure iCEDQ application loadbalancer along with domain name. This url will be used by user to access the iCEDQ Portal.

![](/img/icedq-configure-network-discovery.png)


When you are done, click **Continue**.


## Perform preflight checks

Preflight checks run automatically and verify that your setup meets the minimum requirements.



You can skip these checks, but we recommend you let them run.

Fix any issues in the preflight steps. A common example is the message:


```
Your cluster meets the minimum version of Kubernetes, but we recommend you update to 1.15.0 or later.
```

You can update your cluster's version of Kubernetes if you like.

## Deploy icedq

When you are finished pre-flight checks, click **Deploy and** **Continue**.


iCEDQ is deployed in a 30 minutes.

Once deployment is done, check the application deployment status, Only one service (vault) should be in pending status,

![](/img/icedq-final-confirmation.png)

In a new browser tab, go to the following URL, and replace `<LB_URL>` with the URL you entered in the **Application URL** setting in the KOTS admin console:

`<LB_URL>`

For example:

`http://icedq.mycompany.com/`


## Initialize Vault

1. Once done with the deployment, `Admin` user needs to login to iCEDQ Web portal.

![](/img/icedq-app-login.png)

2. On iCEDQ landing page click on `Administration`.

![](/img/icedq-landing-page.png)

3. On `Administration` click on `Vault`.

![](/img/icedq-admin-click.png)

4. On `Vault` section click on ` Unseal Vault` and then ` Initialize Vault`

![](/img/icedq-vault-init.png)

5. Now that `vault` is initialized, all application services should be in ready state. In case if any app service is not in ready state please contact support@icedq.com or can be checked by using below commands.


```bash
$ kubectl get pods -n default
```
Get the pod name of crashing pod and check the reason of crashing.

```bash
$ kubectl describe pod <the-pod-name>
```

