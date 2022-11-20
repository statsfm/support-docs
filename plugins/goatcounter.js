/**
 * @returns {import('@docusaurus/types').Plugin}
 */
async function AnalyticsPlugin() {
  console.log('Loading GoatCounter plugin');
  return {
    name: 'statsfm-support-analytics',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: '//gc.zgo.at/count.js',
              'data-goatcounter':
                'https://statsfm-support.goatcounter.com/count',
            },
          },
        ],
      };
    },
  };
}

module.exports = AnalyticsPlugin;
