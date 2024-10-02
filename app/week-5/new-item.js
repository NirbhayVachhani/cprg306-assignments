"use client";
import { useState } from "react";

function NewItem() {
    
    const [name, setName] = useState("");  
        const [quantity, setQuantity] = useState(1);  
    const [category, setCategory] = useState("Produce");  

   
    const increment = () => {
        setQuantity(prevQuantity => {
            return prevQuantity < 20 ? prevQuantity + 1 : prevQuantity;
        });
    };

    
    const decrement = () => {
        setQuantity(prevQuantity => {
            return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();  

        
        const item = {
            name,
            quantity,
            category
        };

        console.log(item);

       
        alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div className="flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-lg font-bold mb-2">Name:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-2 border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                {/* Quantity Field (from Week 4) */}
                <div>
                    <p className="text-lg font-bold mb-2">Quantity: {quantity}</p>
                    <div className="flex space-x-4">
                        <button 
                            type="button"
                            onClick={decrement}
                            disabled={quantity === 1}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                        >
                            -
                        </button>
                        <button 
                            type="button"
                            onClick={increment}
                            disabled={quantity === 20}
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Category Field */}
                <div>
                    <label className="block text-lg font-bold mb-2">Category:</label>
                    <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg px-3 py-2"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default NewItem;
