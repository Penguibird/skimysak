/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-minify-classnames`,
            options: {
                dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
                enableOnDevelopment: true,
            }
        }
    ]
}
