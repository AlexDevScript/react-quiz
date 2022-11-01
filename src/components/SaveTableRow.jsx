import React from "react";

const SaveTableRow = ({ orderRecord }) => {
  return (
    <>
      {orderRecord.map(({ nombre, record }) => (
        <tr key={nombre}>
          <td>{nombre}</td>
          <td>{record}</td>
        </tr>
      ))}
    </>
  );
};

export default SaveTableRow;
