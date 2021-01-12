- A Gatsby e-commerce site with WooCommerce, using Decoupled Architecture
- Front end in React
- Backend in WordPress.

[Demo Site](https://gatsby-woocommerce-site.cristianxew.vercel.app/)

This site uses `gatsby-source-wordpress@v4 BETA`

## Features

1. Uses React with Gatsby ( Blazing Fast )
2. PWA ( Works Offline )
3. Image Optimization ( blur effect )
4. GraphQL ( with wp-graphql on WordPress )
5. Custom Widgets, Menus, Social elements.
6. WooCommerce store
7. Google Analytics feature
8. Yoast SEO supported ( with og tags )
9. Product Search with pagination ( even works offline )
10. Product pagination
11. Archive pages.
12. Authentication with JWT
13. My Account page ( with Login and Registration )
14. Create an account on checkout.
15. Social share.
16. Product Carousel.
17. Add to wishlist( even works offline )

## 🚀 Set Up

- Fork/clone the repo
- yarn install

### Gatsby Setup ( when using this repo as your project)

1. Server Side Enviromnent Variables.
   Create a file called `.env` taking example from `.env-example` and add the following into `site` directory :

- `WORDPRESS_SITE_URL=https://example.com`
- `GATSBY_SITE_URL=https://example.com`
- `GOOGLE_TAGMANAGER_ID=xxx`
- `FB_APP_ID=xxx`

2. Client Side Environment Variables.
   Create two more files called `.env.development` `.env.production` and into 'site' directory and add your WordPress site url liks so.

```shell script
GATSBY_WORDPRESS_SITE_URL=https://example.com
```

Env variables from these file will be consumed by Apollo client on client side.

### WordPress Setup

1. On your WordPress site, download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

a. [Headless CMS](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/headless-cms.zip)

b. [woocommerce](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/woocommerce.4.4.1.zip)

c. [wp-graphql](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql.zip) - tested on ( v1.0.0 )

d. [wp-graphql-woocommerce](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-woocommerce.zip)

e. [wp-gatsby](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-gatsby.zip)

f. [Yoast-SEO](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wordpress-seo.14.5.zip)

g. [wp-graphql-yoast-seo](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-yoast-seo.zip)

h. [wp-graphql-jwt-authentication](https://github.com/imranhsayed/gatsby-woocommerce-themes/blob/master/wordpress/plugins/wp-graphql-jwt-authentication.zip)

- You can follow the readme to setup [https://github.com/wp-graphql/wp-graphql-jwt-authentication#install-activate--setup](https://github.com/wp-graphql/wp-graphql-jwt-authentication#install-activate--setup)

2. - Set Header menu as `HCMS Header Menu`

   ![](demos/header-menu-demo.png)

   - Set Footer menu as `HCMS Footer Menu`
     ![](demos/footer-menu-demo.png)

3. You can also set text widgets in #HCMS Footer #1 and #HCMS Footer #2 under Appearance > Widgets in WordPress.
4. Create a Home Page ( if there isn't one already )and make sure you have a home page and Location rule is set to Home page.
5. If isn't already set your site title, description and logo from WordPress customizer.
6. Setup WooCommerce:

- Make sure WooCommerce Plugin is active in WordPress and the payment modes have been set from its settings.
- You can also import default wooCommerce products that come with wooCommerce Plugin for development ( if you don't have any products in your WordPress install ) `WP Dashboard > Tools > Import > WooCommerce products(CSV)`: The WooCommerce default products csv file is available at wp-content/plugins/woocommerce/sample-data/sample_products.csv

7. For home page carousel please upload same size product category images of dimensions `1900x600`

## 🚀 Development

- Navigate into site’s directory.

```shell
yarn install      # Run this for the first time.
npm run dev      # During development.
npm run build    # When ready for production.
```

** For development **
Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`\_. This is a tool you can use to experiment with querying your data.
