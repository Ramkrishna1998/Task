import React from 'react';
import { withRouter } from 'react-router-dom';
import Controller from '../Controller/Controller';
import AddPatient from './addPatient';
import DashboardHeader from './dashboardHeader';
import PatientTable from './patientTable';

const Dashboard = (props: any) => {
  const {
    modal,
    setModal,
    patientList,
    register,
    handleSubmit,
    errors,
    filter,
    addPatient,
    deletePatient,
    handleInput,
    seacrh,
    getReport
  } = Controller(props);

  const addPatientProps = {
    modal,
    setModal,
    addPatient,
    register,
    handleSubmit,
    errors
  };
  const patientTableProps = {
    filter,
    patientList,
    deletePatient
  };

  const dashboardHeadersProps = { setModal, handleInput, seacrh,getReport };

  return (
    <>
      <DashboardHeader {...dashboardHeadersProps} />
      <PatientTable {...patientTableProps} />
      {modal && <AddPatient {...addPatientProps} />}
    </>
  );
};
export default withRouter(Dashboard);
