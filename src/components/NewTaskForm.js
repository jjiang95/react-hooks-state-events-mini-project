import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [category, setCategory] = useState("Code");
  const [details, setDetails] = useState("");
  function handleSelect(e) {
    setCategory(e.target.value);
  }
  function handleSearch(e) {
    setDetails(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: details,
      text: details,
      category: category
    }
    setDetails("");
    onTaskFormSubmit(newTask);
  }

  const options = categories.filter(category => category !== "All").map(category => {
    return (
      <option key={category} value={category}>{category}</option>
    )
  })

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleSearch} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleSelect} name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
