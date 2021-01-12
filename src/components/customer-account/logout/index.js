import React from "react";
import Button from "../../button/index";

const Logout = ({ handleLogout }) => {
  return (
    <div className="logout-button">
      <Button styles="button button__outline-black" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default Logout;
