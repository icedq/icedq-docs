/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'VM Cluster Install',
      items: [
        'embedded-cluster-requirements',
        'embedded-cluster-architecture',
        'embedded-cluster-online-platform-install',
        'embedded-cluster-offline-platform-install',
        'embedded-cluster-add-nodes',
		'embedded-cluster-icedq-install',
		'embedded-cluster-platform-info'
        ]
    },
	{
      type: 'category',
      label: 'Existing Cluster Install',
      items: [
        'existing-cluster-requirements',
        'existing-cluster-architecture',
        'existing-cluster-online-platform-install',
        'existing-cluster-offline-platform-install',
		'existing-cluster-icedq-install',
		'existing-cluster-platform-info'
        ]
    },
    'backup-recovery',
    'customer-environment'
 ]
};

module.exports = sidebars;
