import React, { useState } from 'react'

const CreateTask = ({addTask}) => {
    const [job, setJob] = useState("");
    
    const handleOnChange = (event) => {
        setJob(event.target.value);
    }

    const handleAddTask = () => {
      const newTask = {
        id: Date.now(),
        task: job,
        isDone: false,
      }
        addTask(newTask);
        setJob("");
    }
  return (
    <div className='flex mb-5'>
        <input type='text' className='flex-grow bg-slate-100 border-2 border-slate-300  rounded-l-lg p-2' placeholder='What needs to be done' value={job} onChange={handleOnChange}/>
        <button onClick={handleAddTask}  className='bg-slate-100 border-2 border-slate-300 rounded-r-lg py-2 px-4'>Add</button>
    </div>
  )
}

export default CreateTask