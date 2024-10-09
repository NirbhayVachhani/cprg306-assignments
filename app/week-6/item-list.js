'use client'; 
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name'); 

  
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sorting buttons */}
      <button
        className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSortBy('name')}
      >
        Sort by Name
      </button>
      <button
        className={`mr-2 p-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSortBy('category')}
      >
        Sort by Category
      </button>

      {/* Display the sorted items */}
      <ul className="space-y-2 mt-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
