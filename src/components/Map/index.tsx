import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TPeriod } from "../Home";
import "./Map.scss";
import { faParagraph } from "@fortawesome/free-solid-svg-icons";

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
    <div className="map-container">
      {image && <img src={image} alt={period.name} className="map" />}

      <h3 className="map-title">{period.name}</h3>
      <article className="map-short-description">
        {period.paragraphs.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </article>
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
