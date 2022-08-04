module.exports = {
  siteMetadata: {
    title: "My first blog",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "g88s4od1lzmv",
        accessToken: "qYrT5YUmQYA_GNyw5_QRrhZaLPWZVd9gMOa8P1eOD4s",
        environment: "master"
      }
    },
    "gatsby-plugin-image"
  ],
}
