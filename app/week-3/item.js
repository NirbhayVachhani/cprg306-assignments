// item.js
export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-md mb-2">
        <div>
          <span className="font-bold text-lg">{name}</span>
          <p className="text-gray-400">Buy {quantity} in {category}</p>
        </div>
      </li>
    );
  }
  