import React from "react";
import { ContainerScore, ScoreButtons } from "../styles/Styles";

const Score = ({
  questions,
  answer,
  handleNextCategory,
  handleReset,
  handleClose,
  penultimate,
}) => {
  const questionsMin = questions.length / 2;

  let message;
  if (answer <= 2) message = "😅";
  if (answer === 3) message = "Vas bien 🙂";
  if (answer >= 4) message = "Muy bien 🙂";

  return (
    <ContainerScore>
      <h3>
        {message} tus aciertos son {answer}
      </h3>

      {answer > questionsMin && (
        <ScoreButtons onClick={handleNextCategory}>
          {!penultimate ? "Siguiente" : "Resultado Final"}
        </ScoreButtons>
      )}
      {answer <= questionsMin && (
        <ScoreButtons onClick={handleReset}>Reiniciar</ScoreButtons>
      )}

      <ScoreButtons onClick={handleClose}>Salir</ScoreButtons>
    </ContainerScore>
  );
};

export default Score;
