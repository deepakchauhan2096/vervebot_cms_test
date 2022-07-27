module.exports = {
  /* Your site config here */
  plugins: [

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/assets/images`
    //   }
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options:
      {
        url: "https://cms.vervebot.io/graphql",
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
      },
    },
  ],
}
