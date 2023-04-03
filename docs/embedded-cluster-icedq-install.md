# Configure & Deploy iCEDQ

Now that `vault` is initialized, all application services should be in ready state. In case if any app service is not in ready state please contact support@icedq.com or can be checked by using below commands.

```bash
$ kubectl get pods -n default
```
Get the pod name of crashing pod and check the reason of crashing.

```bash
$ kubectl describe pod <the-pod-name>
```

