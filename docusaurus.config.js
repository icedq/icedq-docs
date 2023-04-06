// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iCEDQ Documentation',
  tagline: '',
  favicon: 'img/icedq-log-wo-com-favicon.png',

  // Set the production url of your site here
  url: 'https://ngdocs.icedq.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iCEDQ', // Usually your GitHub org/user name.
  projectName: 'iCEDQ', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/icedq/icedq-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/icedq.png',
      navbar: {
        title: '',
        logo: {
          alt: 'iCEDQ',
          src: 'img/icedq.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Getting Started',
          } /**,
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            to: '/infrastructure', 
            label: 'Infrastructure', 
            position: 'right'
          } */
        ],
      },
      footer: {
        style: 'dark',
  /*      links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/',
              },
              {
                label: 'Blogs',
                to: '/#',
              },
            ],
          },
          {
            title: 'Learn & Support',
            items: [
              {
                label: 'Resources',
                to: '#',
              },
              {
                label: 'Blogs',
                to: '#',
              },
              {
                label: 'News',
                to: '#',
              },
              {
                label: 'FAQs',
                to: '#',
              }
            ],
          },
          {
            title: 'Our Address',
            items: [
              {
                label: 'Headquarters: 60 Long Ridge Road, Suite 303, Stamford CT 06902.',
                to: '#',
              },
              {
                label: 'Phone: (203) 666-4442',
                to: '#',
              },
              {
                label: 'Email',
                to: 'mailto: contact@icedq.com',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/iCEDQ.ToranaInc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/iCEDQ_ToranaInc',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/icedq-toranainc',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/iCEDQ',
              },
            ],
          },
        ],
    */
        copyright: `Torana Inc. © ${new Date().getFullYear()}. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
