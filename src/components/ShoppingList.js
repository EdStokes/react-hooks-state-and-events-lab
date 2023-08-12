import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [item, setItem] = useState(items);
  


  function handleChange(event) {
    const category = event.target.value;
    setSelectedCategory(category)

    if (category !== "All") {
      const filteredItems = items.filter(item => item.category === category)
      setItem(filteredItems)
    }else{
      setItem(items)
    }
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items"> 
      {item.map((displayItem) => (
          <Item key={displayItem.id} name={displayItem.name} category={displayItem.category} />
        ))}
    
      </ul>
    </div>
  );
}

export default ShoppingList;


