import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        pincode: "",
        phoneNumber: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(shippingInfo).every(value => value !== "")) {
            console.log("Pay Now"); // Replace this with your payment logic
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handlePhoneChange = (e) => {
        const phoneNumber = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
        setShippingInfo({ ...shippingInfo, phoneNumber });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <button className="text-blue-500"><BiArrowBack /></button>
            <form className="mt-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold mb-6">Shipping Address</h1>
                <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={changeHandler}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 px-4 py-3"
                        placeholder="Enter your address"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={changeHandler}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 px-4 py-3"
                        placeholder="Enter your city"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={changeHandler}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 px-4 py-3"
                        placeholder="Enter your state"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode:</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={shippingInfo.pincode}
                        onChange={changeHandler}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 px-4 py-3"
                        placeholder="Enter your pincode"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={shippingInfo.phoneNumber}
                        onChange={handlePhoneChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 px-4 py-3"
                        placeholder="Enter your phone number"
                        maxLength={10}
                    />
                </div>
                <button type='submit' className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-600">Pay Now</button>
            </form>
        </div>
    );
};

export default Shipping;
