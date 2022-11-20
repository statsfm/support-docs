// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

const isPreview = process.env.DEPLOY_CONTEXT === 'preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'stats.fm Support',
  tagline: 'stats.fm Support Centre',
  url: 'https://support.stats.fm',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: isPreview
      ? ['en']
      : [
          'en',
          'nl-NL',
          'hi-IN',
          'de-DE',
          'fr-FR',
          'pt-BR',
          'ru-RU',
          'cs-CZ',
          'ko-KR',
          'pl-PL',
          'es-ES',
          'el-GR',
        ],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/fonts.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcementBar_rebrand_notice', // Increment on change
        content: `We have rebranded to stats.fm!`,
      },
      metadata: [
        {
          name: 'theme-color',
          content: '#22C55E',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      navbar: {
        title: 'stats.fm Support',
        logo: {
          alt: 'stats.fm Support',
          src: 'img/logo.svg',
          width: 22,
          href: '/docs',
        },
        items: [
          {
            to: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://discord.gg/aV9EtB3',
            className: 'navbar-item-discord',
            position: 'right',
            'aria-label': 'Discord server',
          },
          {
            href: 'mailto:support@stats.fm',
            position: 'right',
            label: 'Need help?',
            'aria-label': 'Support Email',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                href: 'https://translate.stats.fm',
                label: 'Help Us Translate',
              },
            ],
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        links: [
          {
            title: 'stats.fm',
            items: [
              {
                label: 'Home',
                href: 'https://stats.fm',
              },
              {
                label: 'Support',
                to: '/',
              },
              {
                label: 'Beta program',
                href: 'https://stats.fm/beta',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/aV9EtB3',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/spotistats',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/statsfm/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                href: 'https://stats.fm/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://stats.fm/terms/',
              },
            ],
          },
          {
            title: 'Download',
            items: [
              {
                html: '<a href="https://apps.apple.com/app/spotistats-for-spotify/id1526912392" target="_blank" rel="noopener noreferrer"><img src="https://cdn.stats.fm/file/statsfm/images/brands/stores/app_store.webp" alt="apple" style="height: 2.25rem;"></a>',
              },
              {
                html: '<a href="https://play.google.com/store/apps/details?id=dev.netlob.spotistats" target="_blank" rel="noopener noreferrer"><img src="https://cdn.stats.fm/file/statsfm/images/brands/stores/play_store.webp" alt="google" style="height: 2.25rem;"></a>',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} stats.fm / Spotistats for Spotify. All rights reserved. Made with ❤️ in the Netherlands. `,
      },
    }),
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsDir: 'docs',
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: false,
      },
    ],
    function (context, options) {
      return {
        name: 'loaders',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.html$/i,
                  use: 'html-loader',
                },
              ],
            },
          };
        },
      };
    },
    require.resolve(path.resolve(__dirname, 'plugins', 'goatcounter.js')),
  ],
};

module.exports = config;
