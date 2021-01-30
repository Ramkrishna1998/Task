import * as React from 'react';
import CustomTable from '../../Shared/DynamicTable/shared_table_CustomTable';
import * as FeatherIcon from 'react-feather';

const tableHeaders: any[] = [
  { key: 'number', value: 'SR NO. ' },
  { key: 'name', value: 'Name', sort: true },
  { key: 'email', value: 'Email', sort: true },
  { key: 'age', value: 'Age', sort: true },
  { key: 'gender', value: 'Gender', sort: true },
  { key: '', value: 'Action', component: 'Action' }
];

const Action = (props: any) => {
  const { data, deletePatient } = props;
  const deletee = () => {
    deletePatient(data.name);
  };
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b font-medium border-gray-200 text-sm leading-5 text-gray-700">
      <div className="flex items-center ml-5">
        <button onClick={deletee}>
          <FeatherIcon.Trash2 data-tip data-for="view" size="20" className="mr-3 text-red-700" />
        </button>
      </div>
    </td>
  );
};
type Props = {
  patientList: any;
  deletePatient: any;
  filter: any;
};
const PatientTable = (props: Props) => {
  const { patientList, deletePatient, filter } = props;

  const CustomTableProps = {
    headers: tableHeaders,
    data: patientList,
    functions: { deletePatient, filter },
    components: { Action }
    /*  pagination: { limit, numbersToshow, activeClass, totalPages, totalRecords, page },
          functions: { changePage },
          loading: loader */
    /*  isLoading,
           loading,
           pagination,
           functions: { changePage, openModal, openDialog, openResetModal, filter } */
  };
  return (
    <div className="flex flex-col m-2 py-8">
      <div className="-my-2 py-2  ">
        <div className="align-middle w-full inline-block min-w-full shadow sm:rounded-lg  border border-gray-200">
          <CustomTable {...CustomTableProps} />
        </div>
      </div>
    </div>
  );
};
export default PatientTable;
