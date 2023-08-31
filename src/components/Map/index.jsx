import React from "react";
import PropTypes from "prop-types";

const Map = ({ period }) => {
  return (
    <div>
      <img src={`../assets/${period.url}`} alt={period.name} />
      <p>{period.name}</p>
    </div>
  );
};

Map.propTypes = {
  period: PropTypes.oneOf([
    "ANCIENT",
    "MEDIEVAL",
    "RENAISSANCE",
    "INDUSTRIAL",
    "MODERN",
  ]),
};
export default Map;
