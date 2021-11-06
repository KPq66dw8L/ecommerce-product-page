import React from 'react';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    return (
        <div>
            {cartItems.length === 0 && <div>Cart is empty.</div>}
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>{item.name} + {item.qty}</div>
                    <a onClick={onAdd}>+</a>
                    <a onClick={onRemove}>-</a>
                </div>
            ))}
        </div>
    );
}