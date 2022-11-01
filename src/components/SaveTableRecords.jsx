import React from "react";
import SaveTableRow from "./SaveTableRow";
import { Table } from "../styles/Styles";
import {ContainerTableRecords} from "../styles/Styles"

const SaveTableRecords = ({ saveRecord }) => {
  const orderRecord = saveRecord.sort((a, b) => b.record - a.record);
  return (
    <ContainerTableRecords>
      <Table>
        <caption>Récords</caption>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Récord</td>
          </tr>
        </thead>
        <tbody>
          <SaveTableRow orderRecord={orderRecord} />
        </tbody>
      </Table>
    </ContainerTableRecords>
  );
};

export default SaveTableRecords;
