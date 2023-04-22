import PropTypes from "prop-types";
import src from '../assets/deleteIcon.svg';
import {useDispatch} from "react-redux";
import {deleteTask} from "../store/features/taskSlicer.js";

function TaskViewComponent({taskName}) {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({id: taskName?.id}))
  }

  return (
    <div className='bg-amber-600 p-4 mb-4 flex flex-row justify-between'>
      <div> {taskName?.task} </div>
      <div className='flex justify-center items-center gap-2'>
        <input type='checkbox' name='checkboxName' className='h-6 w-6'/>
        <button onClick={() => handleDeleteTask()}>
          <img src={src} alt='Delete button' className='w-[1.8rem]'/>
        </button>
      </div>
    </div>
  );
}

TaskViewComponent.propTypes = {
  taskName: PropTypes.object,
};

export default TaskViewComponent;
