import { HISTORICAL_PERIODS } from "./constants";

export type TPeriods = keyof typeof HISTORICAL_PERIODS;
export type TPeriod = (typeof HISTORICAL_PERIODS)[TPeriods];
