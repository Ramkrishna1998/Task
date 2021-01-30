import React from 'react';
import { Search, Edit, Trash } from 'react-feather';
import { Modal } from '../../Shared/Modal/modal';

const validations = {
  name: { required: 'Enter Name' },
  email: {
    required: 'Enter your e-mail',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Enter a valid e-mail address'
    }
  },
  age: { required: 'Enter Age' },
  gender: { required: 'Enter Gender' }
};
const AddPatient = (props: any) => {
  const { addPatient, setModal, register, handleSubmit, errors } = props;

  const onSubmit = (list: any) => {
    addPatient(list);
    setModal(false);
  };
  return (
    <Modal
      className="bg-white p-4 rounded-lg lg:max-w-3xl sm:w-full"
      open={true}
      //onClose={()=>setModal(false)}
    >
      <form className="overflow-y-auto">
        <div style={{ maxHeight: 450 }} className=" pr-4 pb-4">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Patient</h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                Fill in below details to add a new Patient in the system.
              </p>
            </div>
            <div className="mt-6 sm:mt-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                  Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 w-4/5">
                  <div className="mb-4">
                    <input
                      name="name"
                      ref={register({ required: 'Enter Last Name' })}
                      placeholder="Enter Patient Name"
                      //  onChange={(e) => oncustomerSearch(e.target.value)}
                      autoComplete={'off'}
                      className={`flex-1 form-input block w-full min-w-0 rounded-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm ml-2">{errors.name.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                  Email
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 w-4/5">
                  <div className="mb-4">
                    <input
                      name="email"
                      ref={register({ required: 'Enter Last Name' })}
                      placeholder="Enter Patient Email"
                      //  onChange={(e) => oncustomerSearch(e.target.value)}
                      autoComplete={'off'}
                      className={`flex-1 form-input block w-full min-w-0 rounded-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm ml-2">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                  Age
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 w-4/5">
                  <div className="mb-4">
                    <input
                      name="age"
                      type="number"
                      ref={register({ required: 'Enter Last Name' })}
                      placeholder="Enter Patient Age"
                      //  onChange={(e) => oncustomerSearch(e.target.value)}
                      autoComplete={'off'}
                      className={`flex-1 form-input block w-full min-w-0 rounded-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-sm ml-2">{errors.age.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                  Gender
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 w-4/5">
                  <div className="mb-4">
                    <input
                      name="gender"
                      ref={register({ required: 'Enter Last Name' })}
                      placeholder="Enter Patient Gender"
                      //  onChange={(e) => oncustomerSearch(e.target.value)}
                      autoComplete={'off'}
                      className={`flex-1 form-input block w-full min-w-0 rounded-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                    />
                    {errors.gender && (
                      <p className="text-red-500 text-sm ml-2">{errors.gender.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-2 pt-4 border-t border-gray-200">
                <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
                  <button
                    name=""
                    // onClick={handleSubmit(onSubmit)}
                    onClick={() => setModal(false)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                </span>
                <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
                  <button
                    name=""
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 bg-blue-600 active:bg-blue-700 transition duration-150 ease-in-out"
                  >
                    Save
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default AddPatient;
