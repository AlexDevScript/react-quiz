import React from "react";
import { CategoriesButton } from "../styles/Styles";

const RandomCategory = ({ data, setCategory, disabled, setDisabled }) => {
  const dataLength = data.length - 1;
  const numberRandom = Math.round(Math.random() * dataLength);

  const handleCategoryRandom = () => {
    const categoryRandom = data[numberRandom];
    categoryRandom.active = true;
    setDisabled(true);
    setCategory(categoryRandom);
  };

  return (
    <div>
      <CategoriesButton
        disabled={disabled ? "disabled" : null}
        onClick={handleCategoryRandom}
      >
        Categoría Random
      </CategoriesButton>
    </div>
  );
};

export default RandomCategory;
