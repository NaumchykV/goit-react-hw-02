import { useState, useEffect } from 'react'
import './App.css'
import Description from './Components/Description/Description';
import Options from './Components/Options/Options';
import Feedback from './Components/Feedback/Feedback';
import Notification from './Components/Notification/Notification';

const App = ()=> {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  }); 

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));}
  , [feedback]);

  
  const handleFeedback = (option) => {
    if (option === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [option]: prevFeedback[option] + 1,
      }));
    }
  }; 

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  
  return (
    <>
      <div><Description />        
      </div>
      <div><Options onFeedback={handleFeedback} totalFeedback={totalFeedback} />        
      {totalFeedback > 0 ? (
      <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
      total={totalFeedback}
      positivePercentage={positivePercentage}
       />) : (<Notification />)}
      </div>
  </>
  );
};

export default App
