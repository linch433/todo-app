import {configureStore} from "@reduxjs/toolkit";
import {saveStateToLocalStorage, loadStateFromLocalStorage} from "../utils/toolkitUtils.js";
import taskSlicer from "./features/taskSlicer.js";

export const store = configureStore({
  reducer: {
    tasks: taskSlicer
  },
  preloadedState: loadStateFromLocalStorage(),
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
})



