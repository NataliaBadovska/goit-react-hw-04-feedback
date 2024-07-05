import { useState} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

  function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  const countTotalFeedback = () => { 
    let total = good + neutral + bad;
    return total;
  }
  
    const countPositiveFeedbackPercentage = (total) => {
    let positiveFeedback = 0;

    return (total === 0 ? positiveFeedback : positiveFeedback = Math.round(good / total * 100));
  }
  
    const onLeaveFeedback = (name) => {

      switch (name) {
        case 'good':
          setGood(good + 1);
          break;
        case 'neutral':
           setNeutral(neutral + 1);
          break;
         case 'bad':
           setBad(bad + 1);
          break;
        default:
          return;
      }
    }
    
    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);
  
  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions  onLeaveFeedback={onLeaveFeedback}/>
        </Section>
         
        <Section title="Statistics">
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentage}
            />
        </Section>
      </>
    )
}
  
export default App;
  
  

