import React from "react";
import "./style.scss";

const Button = ({ children, styles, onClick, type }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className={`button ${styles ? styles : ""}`}
      type={type ? type : null}
    >
      {children}
    </button>
  );
};

export default Button;
