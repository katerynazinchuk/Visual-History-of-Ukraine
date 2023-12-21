import React, { useState } from "react";
import Header from "../Header";
import Map from "../Map";
import "./Home.scss";
import { PeriodProvider } from "../../context/PeriodContext";

const Home = () => {
  return (
    <PeriodProvider>
      <Header />
      <Map />
    </PeriodProvider>
  );
};

export default Home;
