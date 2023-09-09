import React from "react";
import PropTypes from "prop-types";
import { TPeriod } from "../Home";

const Map = ({ period }: { period: TPeriod }) => {
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
