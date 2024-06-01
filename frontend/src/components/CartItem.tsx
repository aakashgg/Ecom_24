import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

type CartItemProps = {
    cartItem: any;
    // onDelete: () => void; // Function to handle delete
}

const CartItem = ({ cartItem, onDelete }: CartItemProps) => {
    const { photo, productId, name, price, quantity, stock } = cartItem;

    const decreaseQuantity = () => {
        // Implement functionality to decrease quantity
    };

    const increaseQuantity = () => {
        // Implement functionality to increase quantity
    };

    return (
        <div className="bg-white p-4 mb-4 flex items-center">
            <img src={photo} alt={name} className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex-grow">
                <article>
                    <Link to={`/product/${productId}`} className="text-slate-800 font-bold hover:underline">{name}</Link>
                    <p className="text-gray-700 font-semibold">{price}</p>
                </article>
                <div className="flex items-center mt-2">
                    <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded">-</button>
                    <p className="mx-2">{quantity}</p>
                    <button onClick={increaseQuantity} className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded">+</button>
                    <button className="ml-20 text-red-600"> <MdDelete /></button>
                </div>
            </div>

        </div >
    );
}

export default CartItem;
