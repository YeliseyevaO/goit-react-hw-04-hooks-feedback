import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
export default function Statistics({ options, total, positivePercentage }) {
  const { good, neutral, bad } = options;
  return (
    good + neutral + bad > 0 && (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li className={s.statisticsItem}>
            <p>Good:{good}</p>
          </li>
          <li className={s.statisticsItem}>
            <p>Neutral:{neutral}</p>
          </li>
          <li className={s.statisticsItem}>
            <p>Bad:{bad}</p>
          </li>
          <li className={s.statisticsItem}>
            <p>Total:{total()}</p>
          </li>
          <li className={s.statisticsItem}>
            <p>Positive feedback:{positivePercentage()}%</p>
          </li>
        </ul>
      </div>
    )
  );
}
Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
