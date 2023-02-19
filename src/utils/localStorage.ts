export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('weather-state');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('weather-state', serializedState);
  } catch {
    return undefined;
  }
};
