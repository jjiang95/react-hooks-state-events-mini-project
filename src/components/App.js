import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS as tasks } from "../data";

function App() {
  const [TASKS, setTaskList] = useState(tasks)
  const [selectedCategory, setCategory] = useState("All")

  function onTaskFormSubmit(newTask) {
    setTaskList([...TASKS, newTask])
  }

  function handleCategoryClick(e) {
    const category = e.target.value
    const filteredList = tasks.filter(task => {
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
    const newList = TASKS.filter(task => task.text !== e.target.name);
    setTaskList(newList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={CATEGORIES} handleCategoryClick={handleCategoryClick}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList handleDeleteClick={handleDeleteClick} tasks={TASKS}/>
    </div>
  );
}

export default App;
