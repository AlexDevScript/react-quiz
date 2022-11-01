import React from "react";
import { useRecord } from "../hooks/useRecord";
import { ContainerRecord, RecordButons } from "../styles/Styles";
import MessageError from "./MessageError";

const Record = ({ record, saveRecord, setSaveRecord, handleClose }) => {
  const { handleName, handleSave, error, messageError } = useRecord(
    record,
    saveRecord,
    setSaveRecord,
    handleClose
  );

  return (
    <ContainerRecord>
      <h3>🥳 Felicidades terminaste todas las categorías 🎉</h3>
      <p>
        Tu récord <span>{record}</span> aciertos
      </p>

      <form onSubmit={handleSave}>
        <label htmlFor="name">
          Tú nombre o alias debe contener máximo 10 caracteres
        </label>
        <input
          type="text"
          placeholder="Escribe tu nombre o alias"
          maxLength="10"
          id="name"
          onChange={handleName}
          autoFocus
        />
        <RecordButons type="submit">Guardar</RecordButons>
      </form>

      <RecordButons onClick={handleClose}>Salir</RecordButons>
      {error && <MessageError message={messageError} />}
    </ContainerRecord>
  );
};

export default Record;
