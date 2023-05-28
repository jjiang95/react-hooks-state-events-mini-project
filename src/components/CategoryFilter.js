import React from "react";

function CategoryFilter({ CATEGORIES, handleCategoryClick, selectedCategory }) {

  const buttons = CATEGORIES.map(category => {
    return (
      <button className={selectedCategory === category ? "selected" : ""} value={category} onClick={handleCategoryClick} key={category}>{category}</button>
      )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
