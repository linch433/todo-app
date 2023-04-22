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
    }
  },
});

export const {addTask, deleteTask} = taskSlicer.actions;
export default taskSlicer.reducer;
