import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Button = ({ type, size, icon, label }) => {
  const classNames = `button ${type} ${size}`;

  return (
    <button className={classNames}>
      {icon && (
        <span className="button-icon">
          <FontAwesomeIcon icon={faPen} />
        </span>
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["default", "primary", "danger", "secondary"]),
  children: PropTypes.node,
};

export default Button;
