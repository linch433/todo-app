export function saveStateToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.log(e);
  }
}

export function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('tasks');

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
}
