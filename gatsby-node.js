/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
//const path = require("path")
const createFrontPage = require("./create-pages/front-page")
const createShopPage = require("./create-pages/shop-page")
const createArchivePages = require("./create-pages/archive")
const createPages = require("./create-pages/pages")
const createPosts = require("./create-pages/posts")

// Create all pages.
exports.createPages = async ({ actions, graphql }) => {
  await createFrontPage({ actions, graphql })
  await createShopPage({ actions, graphql })
  await createArchivePages({ actions, graphql })
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
}
