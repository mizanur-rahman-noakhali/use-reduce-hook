import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducers';

const PatientManagement = () => {
  const [state,dispatch]=useReducer(patientReducer,patientState);
  return (
    <div>
      <h1>PatientManagement:{state.patients.length}</h1>
      <form>
        <input value></input>
      </form>
    </div>
  );
};

export default PatientManagement;