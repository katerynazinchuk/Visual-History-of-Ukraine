import React from "react";
import Button from "../Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <h1>Visual History Ukraine</h1>
      <Button type={"default"} size={"small"} label={"default"} />
      <Button type={"prime"} size={"medium"} label={"prime"} />
      <Button type={"danger"} size={"large"} label={"danger"} />
      <Button type={"secondary"} size={"small"} label={"secondary"} />
    </div>
  );
};

export default Header;
