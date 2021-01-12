import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { AppContext } from "../../context/AppContext"
import { getFormattedCart } from "../../../utils/functions"
import Button from "../../button/index"
import Link from "gatsby-link"
import { v4 } from "uuid"
import GET_CART from "../../../queries/get-cart"
import ADD_TO_CART from "../../../mutations/add-to-cart"
import "./style.scss"

const AddToCart = props => {
  const { product } = props

  const productQtyInput = {
    clientMutationId: v4(), // Generate a unique id.
    productId: product.productId,
  }

  /* eslint-disable */
  const [cart, setCart] = useContext(AppContext)
  const [showViewCart, setShowViewCart] = useState(false)
  const [requestError, setRequestError] = useState(null)

  // Get Cart Data.
  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // console.warn( 'completed GET_CART' );

      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data)
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart))

      // Update cart data in React Context.
      setCart(updatedCart)
    },
  })

  // Add to Cart Mutation.
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: productQtyInput,
    },
    onCompleted: () => {
      // If error.
      if (addToCartError) {
        setRequestError(addToCartError.graphQLErrors[0].message)
      }

      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch()

      // 2. Show View Cart Button
      setShowViewCart(true)
    },
    onError: error => {
      if (error) {
        console.log(error)
        setRequestError(error.graphQLErrors[0].message)
      }
    },
  })

  const handleAddToCartClick = () => {
    setRequestError(null)
    addToCart()
  }

  return (
    <div className="cart-footer-wrapper">
      {/*	Check if its an external product then put its external buy link */}
      {"ExternalProduct" === product.nodeType ? (
        <a href={product.externalUrl} target="_blank">
          <Button styles="button button__black button__black-outline">
            Buy Now
          </Button>
        </a>
      ) : (
        <Button
          onClick={handleAddToCartClick}
          styles="button button__black button__black-outline"
        >
          Add to cart
        </Button>
      )}
      {showViewCart ? (
        <Link to="/cart">
          <Button styles="button button__red button__red-outline">
            View Cart
          </Button>
        </Link>
      ) : (
        ""
      )}
      {/* Add To Cart Loading*/}
      {addToCartLoading ? (
        <p>Adding to Cart...</p>
      ) : (
        <p style={{ color: "transparent" }}>Adding to Cart...</p>
      )}
    </div>
  )
}

export default AddToCart
