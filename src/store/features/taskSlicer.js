import {createSlice} from "@reduxjs/toolkit";
import {TasksData} from '../../data/tasksData.js';

const initialState = {
  taskAction: TasksData,
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
