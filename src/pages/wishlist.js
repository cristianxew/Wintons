import React, { useState } from "react";
import Layout from "../components/layout";
import WishlistProducts from "../components/wishlist/wishlist-products";
import { getWishListProducts } from "../utils/functions";
import { isEmpty } from "lodash";
import Button from "../components/button/index";
import Link from "gatsby-link";

const WishList = () => {
  const [wishList, setWishList] = useState(getWishListProducts());

  return (
    <Layout>
      <div style={{ marginTop: 128 }} className="container">
        {!isEmpty(wishList) && wishList.productIds.length ? (
          <WishlistProducts setWishList={setWishList} />
        ) : (
          <>
            <h4 className="mb-4">No items in wishlist</h4>
            <Link to="/shop/">
              <Button styles="button button__gray">Shop</Button>
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
};

export default WishList;
