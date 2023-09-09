import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const icons = {
  pen: (
    <FontAwesomeIcon
      icon={icon({ name: "pen" })}
      className="icon"
    />
  ),
};

const Icon = ({ name: iconName }) => {
  return icons[iconName];
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
