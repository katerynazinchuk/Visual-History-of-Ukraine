import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Map = ({ period }) => {
  return (
    <div>
      <img src={`../assets/${period.url}`} alt={period.name} />
      <p>{period.name}</p>
    </div>
  );
};
export default Map;
