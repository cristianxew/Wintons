import React from "react";
import Product from "../../product/index";
import "./style.scss";

const FeaturedProducts = ({ products }) => {
  let FeaturedProductsList = products.filter((product) => product.featured);
  if (FeaturedProductsList.length > 3) {
    FeaturedProductsList = FeaturedProductsList.slice(0, 4);
  }
  return (
    <section className="container featured-products-section">
      <span className="number-tag">02.</span>
      <div className="col-lg-12 featured-products-section__title">
        <h3>featured</h3>
        <h1>Products</h1>
      </div>
      <div className="row product-featured-row">
        {FeaturedProductsList.length &&
          FeaturedProductsList.map((product) => (
            <Product key={product.productId} product={product} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
