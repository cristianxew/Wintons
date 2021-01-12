import React from "react";
import { useQuery } from "@apollo/client";
import { isUserLoggedIn } from "../../../utils/functions";
import GET_CUSTOMER_ORDER from "../../../queries/get-customer-orders";
import { isEmpty } from "lodash";
import { getFormattedDate } from "../../../utils/functions";
import Link from "gatsby-link";

const Orders = () => {
  const auth = isUserLoggedIn();

  const {
    user: { id },
  } = auth;

  // Get Cart Data.
  const { data } = useQuery(GET_CUSTOMER_ORDER, {
    variables: {
      id: id,
    },
  });

  if (isEmpty(data)) {
    return null;
  }

  const {
    customer: { orders },
  } = data;

  console.warn("order", orders);

  return (
    <div className="">
      {!isEmpty(orders.edges) ? (
        orders.edges.map((order) => {
          return (
            <div className="" key={order.node.orderId}>
              <div className="card-header">
                <h4>Order # {order.node.orderId}</h4>
                <time>Order Placed: {getFormattedDate(order.node.date)}</time>
                <div>Payment Method: {order.node.paymentMethodTitle}</div>
                <div>Order Status: {order.node.status}</div>
                <div>Total: {order.node.total}</div>
              </div>
              <div className="card-body">
                <h4>Produsts</h4>
                <ul>
                  {order.node.lineItems.edges.map((item) => {
                    return (
                      <li className="order-item" key={item.node.product.id}>
                        <div>{item.node.product.name}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <div className="p-3">
          <h4 className="mb-3">No orders found</h4>
          <Link to="/shop/">
            <button
              className="btn-outline-dark"
              style={{ fontSize: "12px", padding: "8px 12px" }}
            >
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
