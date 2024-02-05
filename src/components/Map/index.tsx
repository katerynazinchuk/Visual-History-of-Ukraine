import React, { useEffect, useState } from "react";
import "./Map.scss";
import Slider from "../Slider";
import { usePeriod } from "../../context/PeriodContext";

const Map = () => {
  const { period } = usePeriod();
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
      <Slider />

      <h3 className="map-title">{period.name}</h3>
      <article className="map-short-description">
        {period.paragraphs.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </article>
    </div>
  );
};

export default Map;
