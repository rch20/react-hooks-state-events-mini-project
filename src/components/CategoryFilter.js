import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        /* render <button> elements for each category here */
        categories.map((category) => {
          const className = category === selectedCategory ? "selected" : null;

          return (
            <button
              key={category}
              className={className}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          );
        })
      }
    </div>
  );
}

export default CategoryFilter;
