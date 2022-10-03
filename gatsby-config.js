const projectsPath = `content/projects`
const assetsPath = `content/assets`
module.exports = {

    siteMetadata: {
        title: `鱼鱼魔法觉醒`,
        description: `鱼鱼 - Harry Potter Magic Awakened`,
        author: `@yujinyan92`,
        siteUrl: `https://hp.yujinyan.me`,
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
                name: `鱼鱼魔法觉醒`,
                short_name: `HPMA`,
                start_url: `/`,
                background_color: `#3e2e1f`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#3e2e1f`,
                display: `minimal-ui`,
                icon: `src/images/hufflepuff-pride.svg`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
