import React from "react";
import PropTypes from "prop-types";

export default function Notification({ options, message }) {
  const { good, neutral, bad } = options;
  return good + neutral + bad === 0 && <h3>{message}</h3>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
