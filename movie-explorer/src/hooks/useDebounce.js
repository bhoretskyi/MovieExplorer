import { useEffect, useState } from "react";
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebauncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
