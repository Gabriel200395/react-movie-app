import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number) {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounce;
}
