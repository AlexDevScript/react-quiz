import { useState, useEffect } from "react";
import Categories from "./Categories";
import Questions from "./Questions";
import quiz from "../api/quiz.json";
import SaveRecords from "./SaveRecords";
import { ContainerQuiz } from "../styles/Styles";

const Quiz = () => {
  const ALLCATEGORIES = quiz.categories;

  const [data, setData] = useState(ALLCATEGORIES);
  const [category, setCategory] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [saveRecord, setSaveRecord] = useState(
    JSON.parse(localStorage.getItem("RecordQuiz")) ?? []
  );

  const saveLocal = () => {
    localStorage.setItem("RecordQuiz", JSON.stringify(saveRecord));
  };

  useEffect(() => {
    saveLocal();
  }, [saveRecord]);

  return (
    <ContainerQuiz>
      <h1>Quiz</h1>
      <h3>Elige una categoría</h3>
      <Categories
        data={data}
        setCategory={setCategory}
        disabled={disabled}
        setDisabled={setDisabled}
      />

      <Questions
        data={data}
        category={category}
        setCategory={setCategory}
        saveRecord={saveRecord}
        setSaveRecord={setSaveRecord}
        setDisabled={setDisabled}
      />

      {saveRecord.length > 0 && !category && (
        <SaveRecords saveRecord={saveRecord} setSaveRecord={setSaveRecord} />
      )}
    </ContainerQuiz>
  );
};

export default Quiz;
