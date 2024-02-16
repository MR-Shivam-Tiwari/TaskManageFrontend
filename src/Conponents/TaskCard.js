import React from "react";

const TaskCard = ({ task, onTaskCompleted, onTaskDeleted, onTaskEdited }) => {
  const handleCompleteClick = () => {
    if (typeof onTaskCompleted === "function") {
      onTaskCompleted(task.id);
    }
  };

  const handleDeleteClick = () => {
    const userConfirmation = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (userConfirmation && typeof onTaskDeleted === "function") {
      onTaskDeleted(task.id);
    }
  };

  const handleMarkUncompletedClick = () => {
    if (typeof onTaskEdited === "function") {
      const updatedTask = { ...task, completed: !task.completed };
      onTaskEdited(task.id, updatedTask);
    }
  };

  return (
    <div
      className="card rounded-3"
      style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
    >
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <div className="row ">

        <p className="  mt-3 fw-bold">
          Completed:{" "}
          {task.completed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              style={{fill:"green"}}
              fill="currentColor"
              class="bi bi-calendar2-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              style={{fill:"red"}}
              class="bi bi-calendar-x"
              viewBox="0 0 16 16"
            >
              <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          )}
        </p>
<div className="row d-flex gap-3 ms-1">

        {!task.completed && (
          <button className="btn btn-success col  " onClick={handleCompleteClick}>Mark Completed</button>
        )}
        {task.completed && (
          <button className="btn btn-primary col  " onClick={handleMarkUncompletedClick} style={{background:"blue" , borderRadius:"5px", fontSize:"15px"}}>
            Mark as Uncompleted
          </button>
        )}
        <button onClick={handleDeleteClick} className="btn text-white col " style={{background:"red" }}>Delete</button>
        </div>

      </div>
      </div>
    </div>
  );
};

export default TaskCard;
