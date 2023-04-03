# Configure & Deploy iCEDQ
All the configuration for the application and platform installer must be done via the Platform Installer UI. Making changes to underlying Kubernetes resources is not supported.  

## Repository Settings

Follow below steps in the Repository Database section

1. Click the checkbox if you would like to use an externally hosted PostgreSQL database otherwise keep it selected. 
2. Input the username and password for the PostgreSQL database. 

![Repository Settings](/img/repository-db-settings.png)

:::note
For embedded database the installer will create the username and password provided in above step. For externally hosted database please make sure the username and password is valid
:::

## Initial User Setup

Follow below steps in the Authentication section to set up the super administrator of the application. 

1. Provide the username `default is admin` and password of the super administrator 

![Admin User Settings](/img/app-admin-settings.png)

## Load Balancer Setup 

Follow below steps in Network Discovery and Domain section. 

1. Input the FQDN/ IP along with port 32222 for the Base URL.  
2. Input the FQDN in the Domain property. 
3. Select the checkbox for External TLS certificate if you would like to replace the self-signed certificates.

When you are done click **Continue**

![Domain Settings](/img/domain-settings.png)

## Pre Flight Checks 

Preflight checks run automatically and verify that your setup meets the minimum requirements. Once the preflight checks are successful, click on **Deploy**. 

## Deployment Status

The platform installer will start deploying all the services once you click **Deploy**. It will redirect you to the dashboard page to monitor the deployment status. It will take around 15-20 mins for all the services to be deployed except one named vault `default/statefulset/vault`.

### Initialize Vault 

To deploy the vault service follow below steps. 

1. Open https://{ip}:32222 to access the iceDQ application 
2. Login using the Administrator Username & Password provided in [Initial User Setup](#initial-user-setup)
3. Go to Administration and click on Vault
4. Click `Initialie Vault`

Now that `vault` is initialized, all application services should be in ready state. In case if any app service is not in ready state please contact support@icedq.com. 

![Deployment Status](/img/deployment-status-ready.png)


```bash
$ kubectl get pods -n default
```
Get the pod name of crashing pod and check the reason of crashing.

```bash
$ kubectl describe pod <the-pod-name>
```

