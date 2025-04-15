import { useState } from "react";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const average =
    total === 0 ? 0 : parseFloat(((good - bad) / total).toFixed(1));
  const positives = total === 0 ? 0 : parseFloat((good / total).toFixed(2));

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <Feedback
        handleGoodClick={handleGoodClick}
        handleBadClick={handleBadClick}
        handleNeutraClick={handleNeutralClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positives={positives}
        average={average}
      />
    </div>
  );
};

export default App;
