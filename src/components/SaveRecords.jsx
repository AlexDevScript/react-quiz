import React from 'react'
import { useState } from 'react';
import ButtonsRecord from './ButtonsRecord';
import SaveTableRecords from './SaveTableRecords';
import {ContainerSaveRecords} from '../styles/Styles'

const SaveRecords = ({saveRecord, setSaveRecord}) => {
  const [showTableRecords, setShowTableRecords] = useState(false);
    
  return (
    <>
    <ContainerSaveRecords>
        <ButtonsRecord showTableRecords={showTableRecords} setShowTableRecords={setShowTableRecords} setSaveRecord={setSaveRecord}/>
    </ContainerSaveRecords>  
     {showTableRecords &&  <SaveTableRecords saveRecord={saveRecord}/>}
    </>
  )
}

export default SaveRecords;