import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/tasks', {
        ...task,
        completed: false, // Setting completed to false by default
      });
      onTaskAdded(response.data);
      setTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className='p-3 d-flex align-items-center justify-content-center '>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          style={{width:"100%"}}
          name="title"
          value={task.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          style={{width:"100%"}}
          className="form-control"
          id="description"
          name="description"
          value={task.description}
          onChange={handleInputChange}
        />
      </div>
      <div className='d-flex justify-content-center'>

      <button type="submit" className="btn btn-primary ">
        Add Task
      </button>
      </div>
    </form>
    </div>

  );
};

export default TaskForm;
