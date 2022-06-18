const projectsPath = `content/projects`
const assetsPath = `content/assets`
module.exports = {

    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: projectsPath,
                path: projectsPath,
            },
        },
        {
            resolve: `gatsby-transformer-csv`,
            options: {
                typeName: ({ node }) => node.name.charAt(0).toUpperCase() + node.name.slice(1),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: assetsPath,
                path: assetsPath,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                lessBabel: true,
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
