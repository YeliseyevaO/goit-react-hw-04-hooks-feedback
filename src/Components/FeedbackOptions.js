import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const names = Object.keys(options);

  return (
    <>
      <ul className={s.buttonList}>
        <li>
          <button
            name={names[0]}
            className={s.buttonItems}
            type="button"
            onClick={onLeaveFeedback}
          >
            Good
          </button>
        </li>
        <li>
          <button
            name={names[1]}
            className={s.buttonItems}
            type="button"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            name={names[2]}
            className={s.buttonItems}
            type="button"
            onClick={onLeaveFeedback}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
