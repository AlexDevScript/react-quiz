import React, { useEffect, useState } from 'react'

export const useCount = (questions,setShowScore,setShowCategory,score,setScore,setToggle,correctAswer,setCorrectAswer) => {

  const initialCount = 0;
  const initialCurrent = 1;

  const [count, setCount] = useState(initialCount);
  const [current, setCurrent] = useState(initialCurrent);
  const [finish, setFinish] = useState(false);

  const question = questions[count].questionName;
  const aswer = questions[count].answer.join();
  const questionLength = questions.length;
  const minOptions = Math.round(questionLength / 2);

  useEffect(() => {
    if (finish) {
      setShowCategory(correctAswer > minOptions ? true : false);
      setShowScore(score);
      setCount(initialCount);
      setCurrent(initialCurrent);
      setToggle(false);
      setFinish(false);
    }
  }, [finish]);

  const handleOption = (e) => {
    const option = e.target.textContent;

    if (current === questionLength) {
      setFinish(true);
    } else {
      setCount(count + 1);
      setCurrent(current + 1);
    }

    if (option === aswer) {
      setScore(score + 1);
      setCorrectAswer(correctAswer + 1);
    }
  };
  
  return {
      question,count,handleOption,current,questionLength
  }
}
