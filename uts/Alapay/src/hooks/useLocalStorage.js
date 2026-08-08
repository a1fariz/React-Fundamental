import { useEffect, useState } from 'react';

/**
 * Custom hook: persists state to localStorage.
 * @param {string} key   - localStorage key
 * @param {*} initialValue - default value if key is not found
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // Storage might be unavailable (private mode, etc.)
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
