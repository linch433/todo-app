import {configureStore} from "@reduxjs/toolkit";
import taskSlicer from "./features/taskSlicer.js";

export const store = configureStore({
  reducer: {
    tasks: taskSlicer
  },
});

