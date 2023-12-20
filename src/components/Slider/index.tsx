import ReactSlider from "react-slider";
import "./Slider.scss";
import { PERIODS_ARRAY, HISTORICAL_PERIODS } from "../Map/constants";
import { useEffect, useRef, useState } from "react";
import { usePeriod } from "../../context/PeriodContext";

const Slider = () => {
  const maxMarks = 4;
  const sliderRef = useRef<HTMLDivElement>(null);
  const marksRefsArray = useRef<HTMLDivElement[]>([]);
  const markSpreadWidth = sliderRef.current
    ? sliderRef?.current?.clientWidth / maxMarks
    : 0;

  const [sliderWidth, setSliderWidth] = useState(0);
  const { handleChange, period, positionValue } = usePeriod();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setSliderWidth(windowWidth);
  };

  const renderMarkElement = (props: any) => {
    const textShiftMeasurement =
      marksRefsArray.current[props.key]?.getBoundingClientRect().width / 2;

    return (
      <div
        style={{ position: "absolute", left: props.key * markSpreadWidth }}
        key={props.key + props.className}
      >
        <div className="slider-mark" key={props.key + "mark"}></div>
        <span
          className="slider-mark-text"
          style={{ right: textShiftMeasurement || 0 }}
          ref={(element: HTMLDivElement) =>
            marksRefsArray.current.push(element)
          }
        >
          {PERIODS_ARRAY[props.key]}
        </span>
      </div>
    );
  };

  const renderThumbElement = (props: any, state: any) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          // This is used to correctly position the thumb element on the track
          left: props["aria-valuenow"] * markSpreadWidth - 10,
        }}
      >
        <span className="slider-thumb-text">
          [{HISTORICAL_PERIODS[PERIODS_ARRAY[state.valueNow]].years}]
        </span>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        ref={sliderRef}
        data-window-width={sliderWidth}
      >
        <ReactSlider
          className="slider--horisontal"
          defaultValue={positionValue}
          marks
          markClassName="slider-mark"
          min={0}
          max={maxMarks}
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          renderThumb={renderThumbElement}
          renderMark={renderMarkElement}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Slider;
