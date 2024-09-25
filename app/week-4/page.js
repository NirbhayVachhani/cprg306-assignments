"use client";
import { useState } from "react";

function CounterExample() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            } else {
                return prevQuantity;
            }
        });
    };

    const decrement = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            } else {
                return prevQuantity;
            }
        });
    };

    return (
        <div style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh' 
        }}>
            <p>Quantity: {quantity}</p>
            <div>
                <button 
                    onClick={increment} 
                    style={{ 
                        margin: '5px', 
                        padding: '10px', 
                        backgroundColor: 'green', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                >
                    +
                </button>
                <button 
                    onClick={decrement} 
                    style={{ 
                        margin: '5px', 
                        padding: '10px', 
                        backgroundColor: 'red', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default CounterExample;