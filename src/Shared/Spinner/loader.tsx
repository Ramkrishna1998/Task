import styled, { keyframes } from 'styled-components';
import React, { FC, memo } from 'react';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
type LoaderProps = {
  border?: string;
  borderTop?: string;
  width?: string;
  size?: any;
  height?: string;
  text?: boolean;
};
const Loader = styled.div<LoaderProps>`
  border: ${(props) => (props.border ? `0.2em ${props.border}` : '0.2em solid rgba(0, 0, 0, 0.1)')};
  border-top: ${(props) => (props.borderTop ? `0.2em ${props.borderTop}` : '0.2em solid #767676')};
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : '2.28571429rem')};
  height: ${(props) => (props.height ? props.height : '2.28571429rem')};
  animation: ${spin} 0.6s linear infinite;
`;

export default memo((props: LoaderProps) => {
  const { text = true } = props;
  return (
    <div className="flex justify-center">
      <Loader {...props} />
      {text && <div className="-ml-12 mt-10">Loading</div>}
    </div>
  );
});
