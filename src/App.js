import "./App.css";
import React from "react";
import { useState } from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Sections from "./Components/Sections";
import Notification from "./Components/Notification";
import Container from "./Components/Container";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const oneState = Object.values({ good, neutral, bad });
    console.log(oneState);
    const plus = oneState.reduce((total, value) => total + value, 0);
    return plus;
  };
  const countPositiveFeedbackPercentage = () => {
    const oneState = Object.values({ good, neutral, bad });
    const plus = oneState.reduce((total, value) => total + value, 0);
    return Math.floor((100 * good) / plus);
  };

  return (
    <>
      <Container>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={onClickButton}
          />
          <Statistics
            options={{ good, neutral, bad }}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
          <Notification
            options={{ good, neutral, bad }}
            message="No feedback given"
          />
        </Sections>
      </Container>
    </>
  );
}

export default App;
