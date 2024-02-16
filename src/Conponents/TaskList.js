import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onTaskCompleted, onTaskDeleted, onTaskEdited }) => {
  const tasksList = tasks.filter(task => !task.completed);
  const completedTasksList = tasks.filter(task => task.completed);

  return (
    <div className='row gap-5 mt-4 mb-3'>
      <div className='card rounded-4 p-3 col' style={{background:"#ededb1", border:"1px solid black"}}>
        <h2>Tasks</h2>
        {tasksList.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onTaskCompleted={onTaskCompleted}
            onTaskDeleted={onTaskDeleted}
            onTaskEdited={onTaskEdited}
          />
        ))}
      </div>
      <div className='col card p-3 rounded-4' style={{background:"#bdf9bd", border:"1px solid black"}}>
        <h2>Completed Tasks</h2>
        {completedTasksList.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onTaskDeleted={onTaskDeleted}
            onTaskEdited={onTaskEdited}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
