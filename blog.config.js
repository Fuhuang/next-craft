const BLOG = {
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  craftConfigShareUrl: process.env.CRAFT_CONFIG_SHARE_URL
    ? process.env.CRAFT_CONFIG_SHARE_URL
    : 'https://docs.craft.do/editor/d/68503e1d-5fff-fde9-2c54-0d3cf881870c/a646f6eb-6358-e8c2-d76d-aa13b277a5fe?s=SMnmiUzCMfUcZoCNyPSkJVegbod8HrxcCfy8y5zBRqCi', // The link to share your craft config
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS']
  },
  analytics: {
    provider: '', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
