import React, { useState } from "react";
import Header from "../Header";
import Map from "../Map";
import Button from "../Button";
import { BUTTON_SIZES, BUTTON_TYPES } from "../Button/constants";
import { HISTORICAL_PERIODS } from "../Map/constants";
import { type } from "os";

export type TPeriods = keyof typeof HISTORICAL_PERIODS;
export type TPeriod = (typeof HISTORICAL_PERIODS)[TPeriods];

const periodsArray = Object.keys(HISTORICAL_PERIODS) as TPeriods[];

const Home = () => {
  const [period, setPeriod] = useState(periodsArray[0]);

  const clickNext = () => {
    const currentKeyIndex = periodsArray.indexOf(period);
    if (currentKeyIndex < periodsArray.length - 1) {
      const nextKeyIndex = currentKeyIndex + 1;
      setPeriod(periodsArray[nextKeyIndex]);
    }
  };

  const clickPrev = () => {
    const currentKeyIndex = periodsArray.indexOf(period);
    if (currentKeyIndex > 0) {
      const prevKeyIndex = currentKeyIndex - 1;
      setPeriod(periodsArray[prevKeyIndex]);
    }
  };

  return (
    <div>
      <Header />
      <Map period={HISTORICAL_PERIODS[period]} />
      <div>
        <Button
          type={BUTTON_TYPES.DEFAULT}
          size={BUTTON_SIZES.MEDIUM}
          label="Back"
          handleClick={clickPrev}
        />
        <Button
          type={BUTTON_TYPES.DEFAULT}
          size={BUTTON_SIZES.MEDIUM}
          label="Next"
          handleClick={clickNext}
        />
      </div>
    </div>
  );
};
export default Home;
