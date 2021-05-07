import React from "react";

export default function Category({ category, onChange }) {
  return (
    <div className="category" onClick={(e) => onChange(e.target.innerText)}>
      {category}
    </div>
  );
}
