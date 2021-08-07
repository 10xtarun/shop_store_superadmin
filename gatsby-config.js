require('dotenv').config({
  path: `.env.${process.env.BUILD_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shop_store_admin",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "shopstore",
        collection: "superadmin",
        // nTX4aLRWcQRqvhEP
        connectionString: process.env.MONGO_URI
      }
    }

  ],
};
