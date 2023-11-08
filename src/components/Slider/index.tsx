import ReactSlider from "react-slider";
import "./Slider.scss";
import { PERIODS_ARRAY } from "../Home";

const Slider = () => {
  const makeMark = (props: any) => {
    console.log("Mark props", props);

    return (
      <div className="slider-mark" style={props.style}>
        <div className="slider-mark-text">{PERIODS_ARRAY[props.key]}</div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <ReactSlider
        className="slider--horisontal"
        defaultValue={2}
        marks
        markClassName="slider-mark"
        min={0}
        max={4}
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        renderThumb={(props, state) => (
          <div {...props}>
            <span className="slider-thumb-text">
              {PERIODS_ARRAY[state.valueNow]}
            </span>
          </div>
        )}
        renderMark={makeMark}
      />
    </div>
  );
};

export default Slider;
