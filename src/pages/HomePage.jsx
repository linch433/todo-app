import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addTask} from "../store/features/taskSlicer.js";
import TaskViewComponent from "../components/TaskViewComponent.jsx";

const HomePage = () => {
  const tasksList = useSelector((state) => state.tasks.taskAction);
  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({
      id: tasksList.length !== 0 ? tasksList[tasksList.length - 1].id + 1 : 1,
      task
    }));
    setTask('');
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full max-w-screen-sm px-4">
        <div className="text-3xl my-12 flex items-center justify-center">
          ToDo app with Redux Toolkit and Tailwind
        </div>
        <div className="flex flex-row items-center mb-4">
          <input
            name="taskText"
            placeholder="Write your task here"
            value={task}
            className="px-4 py-2 border border-gray-400 rounded-md w-full"
            onChange={handleInputChange}
          />
          <button
            className="bg-buttons-bg text-white px-4 py-2 ml-4 rounded-md hover:bg-buttons-hover-bg transition-colors"
            onClick={() => {
              handleAddTask()
            }}
          >
            Add
          </button>
        </div>
        {tasksList.map((item) => (
          <TaskViewComponent key={item.id} taskName={item}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
