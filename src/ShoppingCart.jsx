import React, { useReducer } from 'react';
import { defaultCart, reducer } from './utils/cartReducer';

const ShoppingCart = () => {
   

    const [cart, dispatch] = useReducer(reducer, defaultCart);

    const addItem = (item) => {
        dispatch({type: "ADD", payload: {item, price: 10}});
    };

    const removeItem = (index) => {
        dispatch({type: "REMOVE", payload: {index, price: 10}});
    };

    const handleClick = () => {
        addItem(prompt('Enter item name:'));
    }

    return (
        <div>
            <h2>useReducer hook</h2>
            <h3>Shopping Cart (Price of each item $10)</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
                {cart.cartItems.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Add Item</button>
            <p>Total Items: {cart.totalItems}</p>
            <p>Total Price: ${cart.totalPrice}</p>

        </div>
    );
};

export default ShoppingCart;