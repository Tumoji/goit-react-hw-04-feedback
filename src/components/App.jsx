import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const getTotal = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const getPositivePercentage = () => {
    const total = getTotal();
    const { good } = feedback;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };

  const { good, neutral, bad } = feedback;
  const total = getTotal();
  const positivePercentage = getPositivePercentage();

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
