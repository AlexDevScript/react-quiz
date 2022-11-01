import React from "react";
import AllCategories from "./AllCategories";
import RandomCategory from "./RandomCategory";
import {ContainerCategories} from "../styles/Styles";

const Categories = ({data, setCategory, disabled, setDisabled}) => {  
 
  return (
    <ContainerCategories>
      <AllCategories data={data} setCategory={setCategory} disabled={disabled}setDisabled={setDisabled}/>
      <RandomCategory data={data} setCategory={setCategory} disabled={disabled}setDisabled={setDisabled} />
    </ContainerCategories>
  );
};

export default Categories;
