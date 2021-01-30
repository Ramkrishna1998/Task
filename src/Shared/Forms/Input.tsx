import React, { FC, memo } from 'react';
import { ErrorLabel } from './ErrorLabel';
import { Label } from './Label';

type InputProps = {
  errors?: any;
  register?: any;
  label?: any;
  name: string;
};
const InputLabel: FC<InputProps> = memo((props) => {
  const { errors, label, name, register } = props;
  const LabelProps = { label };
  const ErrorLAbelProps = { errors, name };

  return (
    <div>
      {label && <Label {...LabelProps} />}
      <div className="mt-1 rounded-md shadow-sm">
        <input
          autoComplete={'off'}
          name={name}
          type="input"
          ref={register}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
      <ErrorLabel {...ErrorLAbelProps} />
    </div>
  );
});
export { InputLabel };
