/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const myCustomQueries = {
    xs: '(max-width: 320px)',
    s: "(max-width: 599px)",
    m: "(min-width: 600px) and (max-width:999px)",
    l: "(min-width: 1000px) and (max-width: 1536px)",
    xl: '(min-width: 1537px)',
    portrait: '(orientation: portrait)',
};


module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: myCustomQueries,
            },
        }, {
            resolve: `gatsby-plugin-minify-classnames`,
            options: {
                dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
                enableOnDevelopment: true,
            }
        }
    ]
}
