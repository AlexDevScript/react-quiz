import React from "react";
import { ContainerQuestions, QuestionsButtons } from "../styles/Styles";

const Category = ({
  categoryName,
  question,
  options,
  handleNext,
  count,
  questionsLength,
}) => {
  return (
    <ContainerQuestions>
      <h2>{categoryName}</h2>
      <p>{question}</p>
      {options.map((option) => (
        <QuestionsButtons key={option} name={option} onClick={handleNext}>
          {option}
        </QuestionsButtons>
      ))}

      <p>
        Pregunta <span>{count + 1}</span>/{questionsLength + 1}
      </p>
    </ContainerQuestions>
  );
};

export default Category;
