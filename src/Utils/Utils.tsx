import { useEffect } from 'react';

const useOutsideEvent = (ref: any, setHover: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setHover();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export { useOutsideEvent };
