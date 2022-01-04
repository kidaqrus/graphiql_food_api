/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: `foodie`,
        collection: [`restaurant`],
        server: {address: 'cluster0-shard-00-01.tcaeq.mongodb.net:27017'},
        auth:{user: 'kidaqrus', password: 'adikwu1111'},
        extraParams: {replicaSet: 'atlas-76imrs-shard-0',
         ssl: true,
          authSource: `admin`,
           retryWrites: true}
      }
    },

  ],
}
