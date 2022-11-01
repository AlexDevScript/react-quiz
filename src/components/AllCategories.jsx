import React from "react";
import { ContainerCategoriesButtons, CategoriesButton } from "../styles/Styles";

const AllCategories = ({ data, setCategory, disabled, setDisabled }) => {
  const handleName = (e) => {
    const categoryName = e.target.name;

    const categorySelected = data.find(
      (cate) => cate.categoryName === categoryName
    );

    categorySelected.active = true;
    setDisabled(true);
    setCategory(categorySelected);
  };

  return (
    <ContainerCategoriesButtons>
      {data.map(({ id, active, categoryName }) => (
        <CategoriesButton
          key={id}
          className={active ? "active" : null}
          name={categoryName}
          disabled={disabled ? "disabled" : null}
          onClick={handleName}
        >
          {categoryName}
        </CategoriesButton>
      ))}
    </ContainerCategoriesButtons>
  );
};

export default AllCategories;
