require('ts-node').register()

export const myCustomQueries = {
  xs: '(max-width: 320px)',
  s: "(max-width: 599px)",
  m: "(min-width: 600px) and (max-width:999px)",
  ms: "(min-width: 600px) and (max-width:800px)",
  ml: "(min-width: 801px) and (max-width:999px)",
  l: "(min-width: 1000px)",
  ls: "(min-width: 1000px) and (max-width: 1299px)",
  ll: "(min-width: 1300px)",

  xl: '(min-width: 1537px)',
  dropM: "(min-width: 800px)",
  portrait: '(orientation: portrait)',
  prefersReducedData: '(prefers-reduced-data: reduce)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "skimysak1",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: 'G-7HFCN7FM66',
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "assets/favicon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
              withWebp: true,
              withAvif: true,

            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
      __key: "content",
    },
  ],
};
