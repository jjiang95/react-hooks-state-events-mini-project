import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selectedCategory, setCategory] = useState("All")

  function handleCategoryClick(e) {
    const category = e.target.value
    const filteredList = TASKS.filter(task => {
      if (category === "All") {
        return true;
      } else {
        return task.category === category;
      }
    });
    setTaskList(filteredList);
    setCategory(category)
  }

  function handleDeleteClick(e) {
    const newList = taskList.filter(task => task.text !== e.target.name);
    setTaskList(newList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} CATEGORIES={CATEGORIES} handleCategoryClick={handleCategoryClick}/>
      <NewTaskForm />
      <TaskList handleDeleteClick={handleDeleteClick} taskList={taskList}/>
    </div>
  );
}

export default App;
