import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { InputLabel } from '../../Shared/Forms';

const validations = {
  firstname: {
    required: 'Enter First Name'
  },
  lastname: {
    required: 'Enter Last Name'
  },
  email: {
    required: 'Enter your e-mail',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Enter a valid e-mail address'
    }
  },
  password: {
    required: 'You must specify a password',
    minLength: {
      value: 8,
      message: 'Password must have at least 8 characters'
    }
  }
};
const Registration = () => {
  const history = useHistory();

  const onSubmit = (data: any) => {
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    localStorage.setItem('firstname', data.firstname);
    localStorage.setItem('lastname', data.lastname);
    history.push('/login');
    //window.localStorage.clear()
  };

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-64 xl:px-24">
          <div className="mx-auto w-full max-w-sm">
            <div>
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 font-family-Poppins ">
                User Registration Form
              </h2>
              <p />
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4">
                    <InputLabel
                      name="firstname"
                      errors={errors}
                      label="First Name"
                      register={register(validations.firstname)}
                    />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      name="lastname"
                      errors={errors}
                      label="Last Name"
                      register={register(validations.lastname)}
                    />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      name="email"
                      errors={errors}
                      label="Email address"
                      register={register(validations.email)}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="mt-6">
                      <InputLabel
                        name="password"
                        errors={errors}
                        label="Password"
                        register={register(validations.password)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-red active:bg-blue-700 transition duration-150 ease-in-out"
                      >
                        Register
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-50 w-50 object-cover"
            src="loginScreen2.png"
            alt="aa"
          />
        </div>
      </div>
    </div>
  );
};
export default Registration;
