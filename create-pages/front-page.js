const { slash } = require(`gatsby-core-utils`)
const frontPageTemplate = require.resolve(
  `../src/templates/front-page/index.js`
)
const { ProductsFragment } = require("./fragements/products/index.js")
const { WelcomeFragment } = require("./fragements/front-page/welcome/index.js")
const { WorksFragment } = require("./fragements/front-page/works/index.js")
const {
  ServicesFragment,
} = require("./fragements/front-page/services/index.js")
const { SeoFragment } = require("./fragements/seo/index.js")

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: wpPage(slug: {eq: "home"}) {
    id
    title
    uri
    seo {
      ...SeoFragment
    }
    welcome {
      ...WelcomeFragment
    }
    works{
      ...WorksFragment
    } 
    services {
      ...ServicesFragment
    }
  }
  categories: allWpProductCategory (filter: {image: {title: {eq: "image-slider"}}}){
    nodes {
      id
      name
      uri
      description
      image {
        ...ImageFragment
      }
    }
  }
  products: allWpProduct {
    edges {
      node {
        ...ProductsFragment
        seo {
          ...SeoFragment
        }
      }
    }
  }
}
${ProductsFragment}
${SeoFragment}
${WelcomeFragment}
${ServicesFragment}
${WorksFragment}
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get home page data.
    return await graphql(GET_FRONT_PAGE).then(({ data }) => {
      const { products, categories, page } = data

      let featuredProducts = []
      products.edges &&
        products.edges.map(product => {
          // Push the categories data in form of an array, to make it searchable
          let productsData = product.node
          productsData.categoriesData = []

          productsData.productCategories.nodes.map(categoryItem => {
            productsData.categoriesData.push(categoryItem.name)
          })

          featuredProducts.push(productsData)
        })

      return {
        page: page,
        categoriesSlider: categories,
        featuredProducts: featuredProducts,
      }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page, categoriesSlider, featuredProducts }) => {
    createPage({
      path: `/`,
      component: slash(frontPageTemplate),
      context: {
        page,
        categoriesSlider,
        featuredProducts,
      },
    })
  })
}
