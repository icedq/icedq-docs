# Add Additional Nodes

The topic provides the necessary steps to add more nodes to the existing embedded cluster and assumes you have already run the Platform Installer on the Primary Node. 

---

:::note
The total number of nodes in a cluster must be an odd number (3, 5, 7, ...).
:::

1. In the Platform Installer UI, click the Cluster Management Tab. 
2. Click Add a Node
3. Select **Secondary Node** and then click **Copy Command**
4. Log on and run the command on the node (Repeat step for all the nodes)

![Cluster Management](/img/embedded-cluster-add-nodes)

:::important
The code generated here expires after time. We recommend that you always copy the code as you work to add additional nodes. Do not save the code for use later.
:::

Once the installation is complete you will see below message on the CLI and the new node in the Cluster Management tab.

![New Node Joined](/img/embedded-cluster-node-joined)

![Cluster Management New Node](/img/embedded-cluster-management)