import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export const useNext = (data, category, setCategory, setDisabled) => {
  const { categoryName, questions } = category;
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [penultimate, setPenultimate] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [record, setRecord] = useState(0);
  const [endCategory, setEndCategory] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);


  const questionsLength = questions.length - 1;
  const randomQuestion = Math.round(Math.random() * questionsLength);
  const [random, setRandom] = useState(randomQuestion);

  const question = questions[random].questionName;
  const options = questions[random].options;
  const answers = questions[random].answer;


  console.log(answers);

  const initialState = (record) => {
    setCount(0);
    setAnswer(0);
    setEndCategory(false);

    if (record) setRecord(0);
  };

  const handleNext = (e) => {
    const option = e.target.textContent.slice(0, 1);

    if (random < questionsLength) {
      setRandom(random + 1);
      setCount(count + 1);
    }

    if (random >= questionsLength) {
      setRandom(0);
      setCount(count + 1);
    }

    if (count >= questionsLength) {
      setEndCategory(true);
    }

    if (option === answers) {
      setAnswer(answer + 1);
      setRecord(record + 1);
    }
  };

  const handleNextCategory = () => {
    const initialCategory = 0;
    const ENDCATEGORY = data.length - 1;
    let positionActually;

    data.forEach((cate, index) => {
      if (cate.categoryName === categoryName) positionActually = index;
    });

    const nextCategory = positionActually + 1;

    if (positionActually < ENDCATEGORY) {
      setCurrent(current + 1);
      data[nextCategory].active = true;
      setCategory(data[nextCategory]);
      initialState();
    }

    if (nextCategory > ENDCATEGORY) {
      setCurrent(current + 1);
      data[initialCategory].active = true;
      setCategory(data[initialCategory]);
      initialState();
    }

    if (current === ENDCATEGORY) {
      setEndQuiz(true);
    }

    if (current === ENDCATEGORY - 1) {
      setPenultimate(true);
    }
  };

  const handleReset = () => {
    initialState(record);
  };

  const handleClose = (exit) => {
    if (!exit) {
      data.forEach((cate) => delete cate.active);
      setCategory(null);
      setDisabled(false);
      return;
    }

    Swal.fire({
      text: "¿Estas seguro de salir del quiz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ¡Salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        data.forEach((cate) => delete cate.active);
        setCategory(null);
        setDisabled(false);
        Swal.fire({
          icon: "success",
          title: "Adios 🖖",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return {
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
  };
};
