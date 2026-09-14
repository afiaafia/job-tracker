import { useEffect, useState } from 'react';
import type { SetStateAction } from 'react';

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);

    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (nextValue: SetStateAction<T>) => {
    setValue(nextValue);
  };

  return [value, updateValue] as const;
}

export default useLocalStorage;
