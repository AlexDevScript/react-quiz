import React from "react";
import { ContainerSaveRecords, SaveRecordsButtons } from "../styles/Styles";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ButtonsRecord = ({
  showTableRecords,
  setShowTableRecords,
  setSaveRecord,
}) => {
  const handleRemoveRecords = () => {
    Swal.fire({
      title: "Eliminar",
      text: "¿Estas seguro de eliminar los records?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("RecordQuiz");
        setSaveRecord([]);
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <ContainerSaveRecords>
      <SaveRecordsButtons
        onClick={() => setShowTableRecords(!showTableRecords)}
      >
        {!showTableRecords ? "Ver Récords" : "Ocultar Récords"}
      </SaveRecordsButtons>
      <SaveRecordsButtons onClick={() => handleRemoveRecords()}>
        Borrar Récords
      </SaveRecordsButtons>
    </ContainerSaveRecords>
  );
};

export default ButtonsRecord;
