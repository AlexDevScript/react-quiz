import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 3rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 0.95rem;
  color: palevioletred;
  margin: 0 0.5rem;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const RandomCategories = ({ api, setGetCategory, active, setActive }) => {
  const apiLenght = api.length - 1;
  const numberRandom = Math.round(Math.random() * apiLenght);
  const category = api[numberRandom];

  const handleCategory = (category) => {
    setGetCategory(category);

    api.map((el) => {
      if (el.categoryName === category.categoryName) {
        setActive(true);
      }
    });
  };

  return (
    <div>
      <Button disabled={active} onClick={() => handleCategory(category)}>
        Categoria Aleatoria
      </Button>
    </div>
  );
};

export default RandomCategories;
