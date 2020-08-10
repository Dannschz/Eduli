import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, Function] => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      return item !== null ? item : initialValue;
    } catch (error) {
      console.log(error.message);
      return initialValue;
    }
  });

  const setLocalStorage = (value: string) => {
    try {
      typeof window !== 'undefined' ? window.localStorage.setItem(key, JSON.stringify(value)) : new Error('window undefined');
      setStoreValue(value);
    } catch (error) {
      console.log(error.message);
    }
  };

  return [storeValue, setLocalStorage];
};

export default useLocalStorage;
