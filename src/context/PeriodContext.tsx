import { createContext, useContext, useState } from "react";
import { HISTORICAL_PERIODS } from "../components/Map/constants";
import { TPeriod } from "../components/Map/types";

type TPeriodContext = {
  period: TPeriod;
  positionValue: number;
  handleChange: (newValue: number) => void;
};

// Here I provide the fallback value for the context
const PeriodContext = createContext<TPeriodContext>({
  period: HISTORICAL_PERIODS.ANCIENT,
  positionValue: HISTORICAL_PERIODS.ANCIENT.index,
  handleChange: () => {},
});

export const PeriodProvider = ({ children }: { children: React.ReactNode }) => {
  const [period, setPeriod] = useState<TPeriod>(HISTORICAL_PERIODS.ANCIENT);
  const [positionValue, setPositionValue] = useState(0);

  const handleChange = (newValue: number) => {
    setPositionValue(newValue);
    const foundPeriod = Object.values(HISTORICAL_PERIODS).find(
      (item) => item.index === newValue
    );
    setPeriod(foundPeriod!);
  };

  return (
    // Here I provide the actual value for the context
    <PeriodContext.Provider value={{ period, positionValue, handleChange }}>
      {children}
    </PeriodContext.Provider>
  );
};

export const usePeriod = () => useContext(PeriodContext);
