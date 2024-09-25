"use client";

import React, { useState } from 'react';

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-xl font-bold mb-4">Quantity: {quantity}</div>
            <div className="flex space-x-4">
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                >
                    Decrement
                </button>
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default NewItem;
