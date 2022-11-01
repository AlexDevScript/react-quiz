import React from "react";
import { Button } from "../styles/Styles";

const ButtonsRecords = ({setShowRecords, showRecords, handleDelete }) => {
  return (
    <div>
      <Button onClick={() => setShowRecords(!showRecords)}>
        {!showRecords ? "Ver Records" : "Ocultar Records"}
      </Button>
      <Button onClick={() => handleDelete()}>Borrar Records</Button>
    </div>
  );
};

export default ButtonsRecords;
