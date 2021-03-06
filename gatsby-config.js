/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const myCustomQueries = {
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
};


module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: 'img',
                path: `${__dirname}/assets`,
            }
        },
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: myCustomQueries,
            },
        }, 
        // {
        //     resolve: `gatsby-plugin-minify-classnames`,
        //     options: {
        //         dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        //         enableOnDevelopment: true,
        //     }
        // },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-7HFCN7FM66'
                ]
            }
        }
    ]
}
