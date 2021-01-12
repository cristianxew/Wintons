import React from "react";
import { isEmpty } from "lodash";
import { isUserLoggedIn } from "../../../utils/functions";

const AccountDetails = () => {
  const auth = isUserLoggedIn();
  if (isEmpty(auth)) {
    return null;
  }

  const { user } = auth;

  return (
    <div className="card-body">
      {!isEmpty(user.firstName) ? (
        <p>
          First Name: <strong>{user.firstName}</strong>
        </p>
      ) : null}
      {!isEmpty(user.lastName) ? (
        <p>
          Last Name: <strong>{user.lastName}</strong>
        </p>
      ) : null}
      {!isEmpty(user.username) ? (
        <p>
          Username: <strong>{user.username}</strong>
        </p>
      ) : null}
      {!isEmpty(user.email) ? (
        <p>
          Email: <strong>{user.email}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default AccountDetails;
