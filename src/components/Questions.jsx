import React from "react";
import { useNext } from "../hooks/useNext";
import Category from "./Category";
import Record from "./Record";
import Score from "./Score";

const Questions = ({
  data,
  category,
  setCategory,
  saveRecord,
  setSaveRecord,
  setDisabled,
}) => {
  if (!category) return;

  const {
    categoryName,
    count,
    questionsLength,
    questions,
    question,
    answer,
    record,
    options,
    penultimate,
    endQuiz,
    endCategory,
    handleNext,
    handleNextCategory,
    handleReset,
    handleClose,
  } = useNext(data, category, setCategory, setDisabled);

  return (
    <div>
      {!endQuiz ? (
        !endCategory ? (
          <Category
            categoryName={categoryName}
            question={question}
            options={options}
            handleNext={handleNext}
            count={count}
            questionsLength={questionsLength}
          />
        ) : (
          <Score
            questions={questions}
            answer={answer}
            handleNextCategory={handleNextCategory}
            handleReset={handleReset}
            handleClose={handleClose}
            penultimate={penultimate}
          />
        )
      ) : (
        <Record
          record={record}
          saveRecord={saveRecord}
          setSaveRecord={setSaveRecord}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Questions;
