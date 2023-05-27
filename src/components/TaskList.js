import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList({ TASKS }) {
  const [taskList, setTaskList] = useState(TASKS)
  
  function handleDeleteClick(e) {
    const newList = taskList.filter(task => task.text !== e.target.name);
    setTaskList(newList);
  }

  

  const displayedList = taskList.map((task) => {
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
