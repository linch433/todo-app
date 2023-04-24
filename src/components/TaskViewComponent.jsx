import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTask, updateTask} from "../store/features/taskSlicer.js";
import PropTypes from "prop-types";
import ButtonIcon from "../style/ButtonIcon.jsx";

import deleteIcon from '../assets/deleteIcon.svg';
import doneIcon from '../assets/doneIcon.svg';
import updateIcon from '../assets/updateIcon.svg';

function TaskViewComponent({taskName}) {
  const [newTask, setNewTask] = useState(taskName?.task);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({id: taskName?.id}))
  }

  const handleUpdateTask = () => {
    if (isInputDisabled) {
      setIsInputDisabled(false);
    } else {
      dispatch(updateTask({id: taskName?.id, task: newTask}));
      setIsInputDisabled(true);
    }
  }

  return (
    <div className='bg-amber-500 p-6 mb-4 flex flex-row justify-between'>
      <div className='flex justify-center items-center gap-2'>
        <input
          value={newTask}
          disabled={isInputDisabled}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          className={`${isInputDisabled === true ? `bg-transparent` : `bg-amber-200`}`}/>
        <ButtonIcon
          onClickFunction={handleUpdateTask}
          srcForImage={doneIcon}
          alt='Delete button'
          className={`${isInputDisabled === true ? `hidden` : ``} w-[1.8rem]`}
        />
      </div>
      <div className='flex justify-center items-center gap-2'>
        <ButtonIcon
          onClickFunction={handleUpdateTask}
          srcForImage={updateIcon}
          alt='Update button'
          className='w-[1.8rem]'
        />
        <ButtonIcon
          onClickFunction={handleDeleteTask}
          srcForImage={deleteIcon}
          alt='Delete button'
          className='w-[1.8rem]'
        />
      </div>
    </div>
  );
}


TaskViewComponent.propTypes = {
  taskName: PropTypes.object,
};

export default TaskViewComponent;
