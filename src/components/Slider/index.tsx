import ReactSlider from "react-slider";
import "./Slider.scss";
import { PERIODS_ARRAY } from "../Home";
import { useCallback, useRef, useState } from "react";

const Slider = () => {
  const maxMarks = 4;
  const sliderRef = useRef<HTMLDivElement>(null);
  const marksRefsArray = useRef<HTMLDivElement[]>([]);
  const markSpreadWidth = sliderRef.current
    ? sliderRef?.current?.clientWidth / maxMarks
    : 0;

  const renderMarkElement = (props: any) => {
    const textShiftMeasurement =
      marksRefsArray.current[props.key]?.getBoundingClientRect().width / 2;

    return (
      <div style={{ position: "absolute", left: props.key * markSpreadWidth }}>
        <div className="slider-mark" key={props.key + "mark"}></div>
        <span
          className="slider-mark-text"
          style={{ right: textShiftMeasurement }}
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
          left: props["aria-valuenow"] * markSpreadWidth - 10,
        }}
      >
        <span className="slider-thumb-text">
          {PERIODS_ARRAY[state.valueNow]}
        </span>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" ref={sliderRef}>
        <ReactSlider
          className="slider--horisontal"
          defaultValue={2}
          marks
          markClassName="slider-mark"
          min={0}
          max={maxMarks}
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          renderThumb={renderThumbElement}
          renderMark={renderMarkElement}
        />
      </div>
    </div>
  );
};

export default Slider;
