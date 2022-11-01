import styled from "styled-components";

export const ContainerQuiz = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 3rem;
    margin: 1rem;
  }

   h3 {
    color: #fff;
  }
`;

const Button = styled.button`
  width: 130px;
  height: 3rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 0.95rem;
  margin: 0 0.5rem;
  padding: 0.25em 1em;
  opacity: 0.5;
  cursor: pointer;
`;

export const ContainerCategories = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    width: 60%;
    margin: auto;
  }
`;

export const ContainerCategoriesButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CategoriesButton = styled(Button)`
  @media (min-width: 1200px) {
    width: 160px;
    height: 60px;
    font-size: 1.1rem;
  }
  &.active {
    opacity: 1;
  }
`;

export const ContainerQuestions = styled.div`
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1200px) {
    height: 500px;
  }

  h2 {
    color: #dc5c6b;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }

  p {
    color: #e5cada;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
    margin-bottom: 1rem;

    @media (min-width: 1200px) {
      font-size: 1.3rem;
    }

    span {
      color: #fff;
      font-size: 1.3rem;
    }
  }
`;

export const QuestionsButtons = styled(Button)`
  width:170px;
  border: 2px solid rgb(216, 199, 246);
  color: #d8c7f6;
  opacity: 1;
  text-align:left;
`;

export const ContainerScore = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1200px) {
    height: 250px;
  }

  h3 {
    color: #e5cada;
  }
`;
export const ScoreButtons = styled(Button)`
  opacity: 1;
`;

export const ContainerRecord = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.65);

  @media (min-width: 1200px) {
    width: 50%;
    margin: auto;
  }

  .error {
    color: #d12b2d;
  }

  h3 {
    text-align: center;
    color: #fff;
  }

  p {
    color: #d8c7f6;
    font-weight: bold;
    letter-spacing: 2px;

    span {
      color: #fff;
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  form {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    label {
      color: #fff;
      font-weight: bold;
      font-size: 0.9rem;
    }

    input {
      width: 50%;
      height: 2rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }
  }
`;
export const RecordButons = styled(Button)`
  height: 2rem;
  opacity: 1;
`;

export const ContainerSaveRecords = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SaveRecordsButtons = styled(Button)`
  width: 150px;
  opacity: 1;
`;

export const ContainerTableRecords = styled.div`
  @media (min-width: 1200px) {
    width: 50%;
    margin: auto;
  }
`;

export const Table = styled.table`
  width: 80%;
  margin: auto;
  font-size: 1rem;
  text-align: center;
  border-collapse: collapse;
  table-layout: fixed;
  background-color: #24044b;

  caption {
    background-color: #24044b;
    color: #d8c7f6;
    font-size: 1.7rem;
    font-weight: bold;
    padding: 10px;
    letter-spacing: 1px;
  }

  thead {
    td {
      height: 40px;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  tbody {
    tr {
      &:nth-child(odd) {
        background-color: #873b77;
      }
      &:nth-child(even) {
        background-color: #96608a;
      }
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #24044b;
        color: #96608a;
        font-weight: bold;
        font-size: 1.1rem;
      }

      td {
        padding: 0 2rem;
        color: #fff;
        line-height: 2;
      }
    }
  }
`;
