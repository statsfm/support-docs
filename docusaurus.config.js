// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const isPreview = process.env.DEPLOY_CONTEXT === 'preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stats.fm Support',
  tagline: 'Stats.fm Support Centre',
  url: 'https://support.stats.fm',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: isPreview ? ['en'] : ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          path: 'blog',
          routeBasePath: '/blog/',
          showReadingTime: true,
          remarkPlugins: [],
          blogDescription:
            'Stay up to date with the latest news and updates from Stats.fm',
        },
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
        title: 'Stats.fm Support',
        logo: {
          alt: 'Stats.fm Support',
          src: 'img/logo.svg',
          width: 22,
        },
        items: [
          {
            to: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'blog',
            position: 'left',
            label: 'Blog',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                href: 'https://translate.spotistats.app',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://stats.fm',
            className: 'navbar-item-website',
            position: 'right',
          },
          {
            href: 'https://discord.gg/aV9EtB3',
            className: 'navbar-item-discord',
            position: 'right',
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
  ],
};

module.exports = config;
