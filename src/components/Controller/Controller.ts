import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

let cahchedList = [
  { name: 'ram', email: 'ram@gmail.com', age: '21', gender: 'male' },
  { name: 'kau', email: 'kau@gmail.com', age: '22', gender: 'female' },
  { name: 'vai', email: 'vai@gmail.com', age: '23', gender: 'male' },
  { name: 'vish', email: 'vish@gmail.com', age: '24', gender: 'female' },
  { name: 'man', email: 'man@gmail.com', age: '25', gender: 'male' }
];
const Controller = (props: any) => {
  let [modal, setModal] = useState(false);
  let [patientList, setPatientList]:[any,any] = useState([
    { name: 'ram', email: 'ram@gmail.com', age: '21', gender: 'male' },
    { name: 'kau', email: 'kau@gmail.com', age: '22', gender: 'female' },
    { name: 'vai', email: 'vai@gmail.com', age: '23', gender: 'male' },
    { name: 'vish', email: 'vish@gmail.com', age: '24', gender: 'female' },
    { name: 'man', email: 'man@gmail.com', age: '25', gender: 'male' }
  ]);
  let [isAuth, setIsAuth] = useState(false);
  let [searchString, setsearchString]: any = useState('');
  const { register, handleSubmit, errors, setError, clearErrors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });
  const deletePatient = (name: string) => {
    let newList = [...patientList];
    newList = newList.filter((i) => i.name !== name);
    cahchedList = newList;
    setPatientList([...newList]);
  };
  const addPatient = (data: any) => {
    let newList = [...patientList];
    newList.push(data);
    cahchedList = newList;
    setPatientList([...newList]);
  };
  const handleInput = (e: any) => {
    setsearchString(e.target.value);
  };
  const seacrh = () => {
    
    if (searchString) {
      let newList = [...cahchedList];
      newList = newList.filter((i) => i.name.toLowerCase().includes(searchString.toLowerCase()));
      setPatientList([...newList]);
    } else {
      setPatientList([...cahchedList]);
    }
  };
  const filter = (headerName: string, order: boolean) => {
    const sortedData: any = [...patientList];
    sortedData.sort((a: any, b: any) => {
      const x = a[headerName]?.toLowerCase();
      const y = b[headerName]?.toLowerCase();
      const asc = x > y ? 1 : x < y ? -1 : 0;
      const desc = x > y ? -1 : x < y ? 1 : 0;
      return order ? desc : asc;
    });
    setPatientList([...sortedData]);
  };
  const objectToCsv = () => {
    const csvRows = [];
    const headers: any = Object.keys(patientList[0]);
    csvRows.push(headers.join(','));

    for (const row of patientList) {
      const value = headers.map((header: any) => {
        const escaped = (''+row[header]).replace(/"/g, '\\"');
        return `${escaped}`;
      });
      csvRows.push(value.join(','));
    }
    return csvRows.join('\n');
  };
  const download = (data:any) =>{
    const blob = new Blob([data], {type:'text/csv'})
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden','')
    a.setAttribute('href',url)
    a.setAttribute('download','download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a)
   }
  const getReport = () => {
    const csvData = objectToCsv();
    download(csvData);
  };
  return {
    modal,
    filter,
    addPatient,
    setModal,
    patientList,
    deletePatient,
    setPatientList,
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    isAuth,
    setIsAuth,
    handleInput,
    seacrh,
    getReport
  };
};
export default Controller;
