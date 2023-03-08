import { useEffect, useState } from "react";

function getStorageValue(key: string, defaultValue: string | number) {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
  }
  
  export const useLocalStorage = (key: string, defaultValue: string | number) => {
    const [value, setValue] = useState(() => {
      return getStorageValue(key, defaultValue);
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };