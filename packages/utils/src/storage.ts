export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error(`Error setting localStorage for key ${key}:`, error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const serialized = localStorage.getItem(key);
    if (serialized === null) return defaultValue;
    return JSON.parse(serialized) as T;
  } catch (error) {
    console.error(`Error getting localStorage for key ${key}:`, error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
