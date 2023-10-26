import React from "react";
import Button from "../Button";
import "./Header.scss";
import { BUTTON_SIZES, BUTTON_TYPES } from "../Button/constants";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="header--main">Visual History Ukraine</h1>
        {/* <Button
        type={BUTTON_TYPES.DEFAULT}
        size={BUTTON_SIZES.SMALL}
        label="Default"
      />
      <Button
        type={BUTTON_TYPES.PRIMARY}
        size={BUTTON_SIZES.SMALL}
        label="Primary"
      />
      <Button
        type={BUTTON_TYPES.DANGER}
        size={BUTTON_SIZES.MEDIUM}
        label="Danger"
        icon="pen"
      /> */}
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
