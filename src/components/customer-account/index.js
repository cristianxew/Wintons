import React, { useState } from "react";
import "./style.scss";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Logout from "./logout";
import Addresses from "./addresses";
import AccountDetails from "./account-details";

const tabItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: "tabitem__icon tab-dashboard",
    content: <Dashboard />,
  },
  {
    id: 2,
    title: "Orders",
    icon: "tabitem__icon tab-users",
    content: <Orders />,
  },
  {
    id: 3,
    title: "Addresses",
    icon: "tabitem__icon tab-addresses",
    content: <Addresses />,
  },
  {
    id: 4,
    title: "Account Details",
    icon: "tabitem__icon tab-account-details",
    content: <AccountDetails />,
  },
  {
    id: 5,
    title: "Logout",
    icon: "tabitem__icon tab-logout",
    content: "",
  },
];

const TabItemComponent = ({
  icon = "",
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {
  return (
    <div className={isActive ? "tabitem" : "tabitem tabitem--inactive"}>
      <button onClick={onItemClicked} style={{ width: "100%" }}>
        <i className={icon} />
        <p className="tabitem__title">{title}</p>
      </button>
    </div>
  );
};

const CustomerAccount = ({ handleLogout }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="row my-account-container">
      <div className="account-details-menu col-sm-4 col-lg-3">
        {tabItems.map(({ id, icon, title }) =>
          5 === id ? (
            <Logout key={title} handleLogout={handleLogout} />
          ) : (
            <TabItemComponent
              key={title}
              icon={icon}
              title={title}
              onItemClicked={() => setActive(id)}
              isActive={active === id}
            />
          )
        )}
      </div>
      <div className="account-details-content col-sm-8 col-lg-9 px-0">
        {tabItems.map(({ id, content }) => {
          return active === id ? <div key={id}>{content}</div> : "";
        })}
      </div>
    </div>
  );
};

export default CustomerAccount;
