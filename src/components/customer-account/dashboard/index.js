import React from "react";
import { isEmpty } from "lodash";
import { isUserLoggedIn } from "../../../utils/functions";

const Dashboard = () => {
  const auth = isUserLoggedIn();
  if (isEmpty(auth)) {
    return null;
  }

  const { user } = auth;

  return (
    <div className="card-body">
      <div className="">
        {!isEmpty(user.firstName) || !isEmpty(user.lastName) ? (
          <h4>
            Hello{" "}
            <strong>
              {user.firstName} {user.lastName}!
            </strong>
          </h4>
        ) : (
          <h4>
            Hello <strong>{user.username}!</strong>
          </h4>
        )}
        <section>
          From your account dashboard, you can view your recent orders, shipping
          and billing addresses
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
