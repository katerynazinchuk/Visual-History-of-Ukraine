import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TPeriod } from "../Home";

const Map = ({ period }: { period: TPeriod }) => {
  const [image, setImage] = useState(null);

  // Dynamically import images
  const loadImage = (img: string) => {
    const imgName = img.toLowerCase();
    import(`../../assets/${imgName}.jpg`).then((image) => {
      setImage(image.default);
    });
  };

  useEffect(() => {
    loadImage(period.name);
  }, [period]);

  return (
    <div>
      {image && <img src={image} alt={period.name} />}
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
