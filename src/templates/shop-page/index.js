import React from "react";
import Search from "../../components/shop/search";
import { isEmpty } from "lodash";
import Layout from "../../components/layout";
//import Carousel from "../../components/home/carousel";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const ShopPage = (props) => {
  const {
    pageContext: {
      page: { title, seo, uri },
      categories,
      categoryName,
      postSearchData: { products, options },
    },
  } = props;

  return (
    <Layout>
      {!isEmpty(props.pageContext) ? (
        <>
          <SEO
            title={title}
            seoData={seo}
            uri={uri}
            header={{ siteTitle: "SHOP NOW BEAUTIFULL CRAFTED BLINDS" }}
            openGraphImage={getOgImage(seo)}
          />
          {/*  <Carousel categories={categories} /> */}
          <Search
            products={products}
            initialProducts={products}
            engine={options}
            category={categoryName}
            categories={categories}
          />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  );
};
export default ShopPage;
