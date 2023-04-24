import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  taskAction: [],
}

export const taskSlicer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskAction.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskAction = state.taskAction.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      state.taskAction.map((item) => {
        if (item.id === action.payload.id) {
          item.task = action.payload.task;
        }
      })
    }
  },
});

export const {
  addTask,
  deleteTask,
  updateTask
} = taskSlicer.actions;
export default taskSlicer.reducer;
