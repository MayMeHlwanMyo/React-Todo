import React from 'react'

const Task = ({job: {id,task,isDone} , removeTask, doneTask}) => {

    const handleRemoveTaskBtn = () => {
        removeTask(id);
    };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className='flex justify-between border border-slate-300 p-4 rounded-lg mb-3 last:mb-0 '>
        <div className='flex items-center gap-3'>
        <input type="checkbox" checked={isDone} onChange={handleOnChange}
        className='size-4' />
        <p className={isDone ? 'line-through' : ''}>{task}</p>
        </div>
        <button onClick={handleRemoveTaskBtn} className=' test-sm border-2 bg-red-100 text-red-700 border-red-100 rounded-lg py-2 px-4'>Delete</button>
    </div>
  );
};

export default Task;