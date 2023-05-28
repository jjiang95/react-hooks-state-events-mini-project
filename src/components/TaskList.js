import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList({ tasks, handleDeleteClick }) {
  
  const displayedList = tasks.map((task) => {
    return (
      <Task handleDeleteClick={handleDeleteClick} key={uuid()} category={task.category} text={task.text}/>
    )
  })

  
  return (
    <div className="tasks">
      {displayedList}
    </div>
  );
}

export default TaskList;
