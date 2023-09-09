import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import Icon from "../Icon";

const Button = ({
  type,
  size,
  icon,
  label,
  handleClick,
  isDisabled = false,
}: any) => {
  const classNames = `button ${type} ${size}`;

  return (
    <button className={classNames} onClick={handleClick} disabled={isDisabled}>
      {icon && <Icon name={icon} className="button-icon" />}
      {label && <span>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["default", "primary", "danger", "secondary"]),
  icon: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
