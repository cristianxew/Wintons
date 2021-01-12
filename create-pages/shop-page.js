const { slash } = require(`gatsby-core-utils`);
const shopPageTemplate = require.resolve(`../src/templates/shop-page/index.js`);
const singleProductPageTemplate = require.resolve(
  `../src/templates/product/index.js`
);
const { ProductsFragment } = require("./fragements/products/index.js");
const { SeoFragment } = require("./fragements/seo/index.js");

// Get all the shop page data.
const GET_SHOP_PAGE = `
query GET_SHOP_PAGE {
  page: wpPage(slug: {eq: "shop"}) {
    id
    title
	uri
	seo {
	  ...SeoFragment
	}
  }
  categories: allWpProductCategory(filter: {name: {nin: ["Uncategorized", "Types of Blinds"]}}, limit: 10) {
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
  products: allWpProduct(limit: 1000) {
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
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const fetchPosts = async () => {
    // Do query to get shop page data.
    return await graphql(GET_SHOP_PAGE).then(({ data }) => {
      const { products, categories, page } = data;

      let allTheProducts = [];
      products.edges &&
        products.edges.map((product) => {
          // Push the categories data in form of an array, to make it searchable
          let productsData = product.node;
          productsData.categoriesData = [];

          productsData.productCategories.nodes.map((categoryItem) => {
            productsData.categoriesData.push(categoryItem.name);
          });

          allTheProducts.push(productsData);
        });

      return {
        page: page,
        categories: categories,
        allProducts: allTheProducts,
      };
    });
  };

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page, categories, allProducts }) => {
    createPage({
      path: `/shop/`,
      component: slash(shopPageTemplate),
      context: {
        page,
        categories,
        allProducts,
        categoryName: "all",
        postSearchData: {
          products: allProducts,
          options: {
            indexStrategy: `Prefix match`,
            searchSanitizer: `Lower Case`,
            TitleIndex: true,
            AuthorIndex: true,
            CategoryIndex: true,
            SearchByTerm: true,
          },
        },
      },
    });

    // Create Single Product Pages.
    allProducts.length &&
      allProducts.map((product) => {
        createPage({
          path: product.link,
          component: slash(singleProductPageTemplate),
          context: { product },
        });
      });
  });
};
