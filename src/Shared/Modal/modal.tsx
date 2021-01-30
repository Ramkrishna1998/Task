import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';

interface IModalContainerProps {
  open: boolean;
  onClose?: any;
  children: any;
  className?: string;
  onClick?: Function;
  renderToElement?: any;
  containerClassName?: string;
  overlayClassName?: string;
}

export class Modal extends Component<IModalContainerProps> {
  renderModal() {
    const { open, onClose, children, className, containerClassName, overlayClassName } = this.props;

    if (!open) {
      return null;
    }

    const resolvedClassName = classnames(
      'yum-ui-modal',
      'modal',
      'shadow-xl overflow-hidden transform transition-all ',
      {
        'ease-in duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !open
      },
      { 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100': open },
      className
    );

    const resolvedContainerClassName = classnames(
      'fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center',
      { 'ease-out duration-300 opacity-0': open },
      { 'ease-out duration-300 opacity-100': open },
      containerClassName
    );

    const resolvedOverlayClassName = classnames(
      'absolute inset-0 bg-gray-800 opacity-75',
      overlayClassName
    );

    return (
      <div className={resolvedContainerClassName}>
        <div role="button" className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className={resolvedOverlayClassName}></div>
        </div>
        <div
          className={resolvedClassName}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>{children}</div>
        </div>
      </div>
    );
  }

  render() {
    let { renderToElement } = this.props;

    if (!renderToElement) {
      renderToElement = document.querySelector('body');
    }

    const renderedModal = this.renderModal();
    return ReactDOM.createPortal(renderedModal, renderToElement);
  }
}
