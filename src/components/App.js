import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  
  function handleCategoryClick(e) {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} handleCategoryClick={handleCategoryClick}/>
      <NewTaskForm />
      <TaskList TASKS={TASKS}/>
    </div>
  );
}

export default App;
