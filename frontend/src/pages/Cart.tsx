import React, { useState, useEffect } from 'react';
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/CartItem.tsx'; // Capitalize the component name
import { Link } from 'react-router-dom';

const cartItems = [
    {
        productId: "jkdbhfbdjibf",
        photo: 'https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg',
        name: 'The Tibetan Book of Dead',
        price: '₹222', // Use consistent currency symbol
        stock: '222',
        quantity: '1'
    },
    {
        productId: "jkdbhfbdjibf",
        photo: 'https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg',
        name: 'The Tibetan Book of Dead',
        price: '₹222', // Use consistent currency symbol
        stock: '222',
        quantity: '1'
    },
    {
        productId: "jkdbhfbdjibf",
        photo: 'https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg',
        name: 'The Tibetan Book of Dead',
        price: '₹222', // Use consistent currency symbol
        stock: '222',
        quantity: '1'
    },
    {
        productId: "jkdbhfbdjibf",
        photo: 'https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg',
        name: 'The Tibetan Book of Dead',
        price: '₹222', // Use consistent currency symbol
        stock: '222',
        quantity: '1'
    },
    {
        productId: "jkdbhfbdjibf",
        photo: 'https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg',
        name: 'The Tibetan Book of Dead',
        price: '₹222', // Use consistent currency symbol
        stock: '222',
        quantity: '1'
    },

];

const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 100;
const discount = 150;
const total = subTotal + shippingCharges + tax - discount;

const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    const [isCouponValid, setCouponValid] = useState(false); // Remove type declaration if not using TypeScript

    useEffect(() => {
        const timeOutid = setTimeout(() => {
            if (Math.random() > 0.5) setCouponValid(true);
            else setCouponValid(false);
        }, 1000);

        return () => {
            clearTimeout(timeOutid);
            setCouponValid(false);
        }
    }, [couponCode]);

    return (
        <div className="flex justify-center mt-10">
            <main className="w-2/3 pr-8">
                {/* Cart items can be added here */}
                {cartItems.length > 0 ? cartItems.map((item, idx) => (
                    <CartItem key={idx} cartItem={item} />
                )) :
                    <h1>No items </h1>
                }
            </main>
            <aside className="w-1/3 pl-8 flex flex-col justify-center"> {/* Added flex and justify-center */}
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <p className="mb-2">Subtotal: ₹{subTotal}</p>
                <p className="mb-2">Shipping Charges: ₹{shippingCharges}</p>
                <p className="mb-2">Tax: ₹{tax}</p>
                <p className="mb-2 text-red-600">Discount: -₹{discount}</p>
                <hr className="my-4" />
                <p className="text-xl font-semibold">Total: ₹{total}</p>
                <div className="mt-4">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="border rounded px-2 py-1 w-full"
                    />
                    {couponCode &&
                        (isCouponValid ?
                            (<span className='text-green-600'> Discount of ₹{discount}</span>)
                            : (<span className='text-red-600'>Invalid Coupon </span>))
                    }
                </div>
                {
                    cartItems.length > 0 && <Link to={"/shipping"} className="bg-blue-800 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-900 text-center">Checkout</Link>
                }
            </aside>
        </div>
    );
};

export default Cart;
