import React from 'react';
import * as FeatherIcon from 'react-feather';

type Props = {
  setModal: Function;
  handleInput: any;
  seacrh: any;
  getReport: any;
};
const DashboardHeader = (props: Props) => {
  const { setModal, handleInput, seacrh, getReport } = props;
  const searching = (e: any) => {
    e.preventDefault();
    seacrh();
  };

  return (
      <div className="relative bg-blue-500">
        <div className=" ">
          <div className="flex px-4 justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="text-white font-medium text-xl">Dashboard</div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="flex mr-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                <button
                  onClick={() => getReport()}
                  className="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gay-700 hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 bg-white active:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Download
                  <FeatherIcon.Download data-tip data-for="view" size="16" className="ml-3" />
                </button>
                <input
                  autoComplete={'off'}
                  name="firstName"
                  onChange={handleInput}
                  placeholder="Search Patient Name"
                  className="flex-1 form-input block w-full min-w-0 rounded-r-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <button
                   onClick={seacrh}
                  className="pl-2 bg-white rounded-md rounded-l-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <FeatherIcon.Search data-tip data-for="view" size="16" className="mr-3" />
                </button>
              </div>
              <button
                onClick={() => setModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gay-700 hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 bg-white active:bg-gray-200 transition duration-150 ease-in-out"
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default DashboardHeader;
