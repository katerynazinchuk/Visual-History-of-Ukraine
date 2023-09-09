import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TPeriod } from "../Home";
import "./Map.scss";

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
        <p>
          The ancient history of Ukraine spans millennia, marked by the rise and
          fall of various cultures. It began with Neolithic settlements that
          laid the groundwork for Ukrainian culture. The Scythians, a nomadic
          warrior society, dominated the region from the 7th to the 3rd
          centuries BCE, leaving behind unique artifacts and influences.
        </p>
        <p>
          In the 9th century CE, Ukraine's eastern part became part of Kievan
          Rus', a powerful East Slavic state with Kyiv as its capital. This
          period introduced Christianity, shaping Ukrainian culture. The Kievan
          Rus' eventually fragmented into smaller principalities, paving the way
          for the diverse regional identities seen in Ukraine today.
        </p>
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
