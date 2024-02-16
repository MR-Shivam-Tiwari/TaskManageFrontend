import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './Conponents/TaskForm';
import TaskList from './Conponents/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error getting tasks:', error);
      }
    };

    fetchTasks();

    const intervalId = setInterval(fetchTasks, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // App.js
  const handleTaskCompleted = async (taskId) => {
    console.log('Marking task as completed:', taskId);
    try {
      await axios.patch(`http://localhost:4000/api/tasks/${taskId}`, { completed: true });
      console.log('Task marked as completed successfully');
      // Refresh the task list after marking a task as completed
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };
  
  const handleTaskDeleted = async (taskId) => {
    console.log('Deleting task:', taskId);
    try {
      await axios.delete(`http://localhost:4000/api/tasks/${taskId}`);
      console.log('Task deleted successfully');
      // Refresh the task list after deleting a task
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
// In App.js
const handleTaskEdited = async (taskId, updatedTask) => {
  console.log('Editing task:', taskId);
  try {
    const response = await axios.put(`http://localhost:4000/api/tasks/${taskId}`, updatedTask);
    console.log('Task edited successfully:', response.data);
    // Refresh the task list after editing a task
  } catch (error) {
    console.error('Error editing task:', error);
  }
};

  

  return (
    <div className='' >
    <div className='container' >
      <div className='mb-3'></div>
    <h3  className='text-center   '>Task Management Application</h3>
    <TaskForm onTaskAdded={handleTaskAdded} />
    <TaskList
      tasks={tasks}
      onTaskCompleted={handleTaskCompleted}
      onTaskDeleted={handleTaskDeleted}
      onTaskEdited={handleTaskEdited}
    />
  </div>
  </div>
  );
}

export default App;
