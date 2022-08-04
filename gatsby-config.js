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
        spaceId: "",
        accessToken: "",
        environment: "master"
      }
    },
    "gatsby-plugin-image"
  ],
}
