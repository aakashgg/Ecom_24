import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login: React.FC = () => {
    const [formData, setFormData] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', formData);
            if (response.status === 200) {
                toast.success('Login successful!');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 400) {
                    toast.error('Please enter all details.');
                } else if (error.response?.status === 401) {
                    toast.error('Incorrect email or password.');
                } else if (error.response?.status === 500) {
                    toast.error('Error in login. Please try again later.');
                } else {
                    toast.error('Login failed. Please try again.');
                }
            } else {
                toast.error('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-md">
            <Toaster />
            <div className="login-form bg-white rounded-lg shadow-lg px-10 py-12">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-8 text-center">
                        <a href="/signup" className="text-indigo-600 hover:underline">
                            New User? Signup!
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="btn bg-indigo-600 text-white px-6 py-3 rounded-md w-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
