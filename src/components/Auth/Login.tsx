import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { InputLabel } from '../../Shared/Forms';

const validations = {
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
const Login: FC<any> = memo((props: any) => {
  let { isAuth, setIsAuth } = props;
  const history = useHistory();
  const Email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const onSubmit = (data: any) => {
    if (data.email === Email && data.password === password) {
      setIsAuth(true);
      history.push('/dashboard');
    } else {
      alert('User name or password is incorrect');
    }
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
              {/* <img
                className="h-12 w-auto align-centre"
                src="logo.png"
                alt="a"
              /> */}

              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 font-family-Poppins ">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <InputLabel
                      name="email"
                      errors={errors}
                      label="Email"
                      register={register(validations.email)}
                    />
                  </div>
                  <div className="mt-6">
                    <InputLabel
                      name="password"
                      errors={errors}
                      label="Password"
                      register={register(validations.password)}
                    />
                  </div>
                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-red active:bg-blue-700 transition duration-150 ease-in-out"
                      >
                        Sign in
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
});
export { Login };
