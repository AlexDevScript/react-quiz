import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export const useRecord = (record, saveRecord, setSaveRecord, handleClose) => {
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handleName = (e) => {
    const name = e.target.value;
    setInputName(name.trim());
  };

  const handleError = (messa) => {
    setError(true);
    setMessageError(messa);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const repeat = saveRecord.filter(({ nombre }) => nombre === inputName);

    if (!inputName) {
      handleError("El nombre y/o alias  es necesario");
      return;
    }

    if (repeat.length > 0) {
      handleError("El nombre y/o alias ya existe intenta otro");
      return;
    }

    setSaveRecord([
      ...saveRecord,
      {
        nombre: inputName,
        record: record,
      },
    ]);

    Swal.fire({
      icon: "success",
      title: "Guardado",
      showConfirmButton: false,
      timer: 1500,
    });

    setError(false);
    handleClose(false);
  };

  return { handleName, handleSave, error, messageError };
};
