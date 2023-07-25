import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ type, size }) => {
  return (
    <button className="button">
      <a className="link" href="#">
        Main
      </a>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["default", "primary", "danger", "secondary"]),
};

export default Button;
