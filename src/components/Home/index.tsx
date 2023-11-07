import React, { useEffect, useState } from "react";
import Header from "../Header";
import Map from "../Map";
import Button from "../Button";
import "./Home.scss";
import { BUTTON_SIZES, BUTTON_TYPES } from "../Button/constants";
import { HISTORICAL_PERIODS } from "../Map/constants";

export type TPeriods = keyof typeof HISTORICAL_PERIODS;
export type TPeriod = (typeof HISTORICAL_PERIODS)[TPeriods];

const periodsArray = Object.keys(HISTORICAL_PERIODS) as TPeriods[];

const Home = () => {
  const [period, setPeriod] = useState(periodsArray[0]);
  const [backButtonDisabled, setBackButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const currentKeyIndex = periodsArray.indexOf(period);

  const clickNext = () => {
    if (currentKeyIndex < periodsArray.length - 1) {
      const nextKeyIndex = currentKeyIndex + 1;
      setPeriod(periodsArray[nextKeyIndex]);
    }
  };

  const clickPrev = () => {
    if (currentKeyIndex > 0) {
      const prevKeyIndex = currentKeyIndex - 1;
      setPeriod(periodsArray[prevKeyIndex]);
    }
  };

  useEffect(() => {
    if (currentKeyIndex === 0) {
      setBackButtonDisabled(true);
    } else if (currentKeyIndex === periodsArray.length - 1) {
      setNextButtonDisabled(true);
    } else {
      if (backButtonDisabled) {
        setBackButtonDisabled(false);
      }
      if (nextButtonDisabled) {
        setNextButtonDisabled(false);
      }
    }
  }, [currentKeyIndex]);

  return (
    <div>
      <Header />
      <Map period={HISTORICAL_PERIODS[period]} />
      <div className="map-switcher-container">
        <Button
          type={BUTTON_TYPES.DEFAULT}
          size={BUTTON_SIZES.MEDIUM}
          label="Back"
          handleClick={clickPrev}
          isDisabled={backButtonDisabled}
        />
        <Button
          type={BUTTON_TYPES.DEFAULT}
          size={BUTTON_SIZES.MEDIUM}
          label="Next"
          handleClick={clickNext}
          isDisabled={nextButtonDisabled}
        />
      </div>
    </div>
  );
};

export default Home;
