import React, { FC, memo } from 'react';

export type ButtonProps = {
  functionName: any;
  name: string;
  className?: string;
  loading?: boolean;
  upperCase?: string;
};
const Button: FC<ButtonProps> = (props) => {
  const { functionName, name, loading, className, upperCase } = props;
  const onClick = (event: any) => {
    event.preventDefault();
    functionName();
  };
  return (
    <div className={`${loading ? 'opacity-50' : ''}`}>
      <button onClick={onClick} type="submit" className={className}>
        {loading ? (
          <div className={`flex items-center justify-center space-x-3`}>
            loading ...
            <p>{upperCase ? name.toUpperCase() : name}</p>
          </div>
        ) : (
          <> {upperCase ? name.toUpperCase() : name}</>
        )}
      </button>
    </div>
  );
};
const WrappedButton = memo(Button);
export { WrappedButton as Button };
