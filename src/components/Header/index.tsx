import React from "react";
import Button from "../Button";
import "./Header.scss";
import { BUTTON_SIZES, BUTTON_TYPES } from "../Button/constants";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">Visual History Ukraine</h1>
        <Button
          type={BUTTON_TYPES.SECONDARY}
          size={BUTTON_SIZES.LARGE}
          label="About project"
        />
      </div>
    </div>
  );
};

export default Header;
