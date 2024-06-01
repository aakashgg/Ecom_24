import React, { useState } from 'react'
import { FaSearch, FaSignInAlt, FaShoppingBag, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const user = { _id: "", role: "" };

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Link onClick={() => setOpen(false)} to='/' className='text-white'>Home</Link>
                <Link onClick={() => setOpen(false)} to='/search' className='text-white'><FaSearch /></Link>
                <Link onClick={() => setOpen(false)} to="/cart" className='text-white'><FaShoppingBag /></Link>
            </div>
            <div className='relative'>
                {user._id ? (
                    <>
                        <button onClick={() => setOpen(!isOpen)} className='text-white'><FaUser /></button>
                        {isOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                                <div className="py-2">
                                    {user.role === "admin" && <Link to="/admin/dashboard" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Admin </Link>}
                                    <Link to="/orders" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Orders</Link>
                                    <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                        <FaSignOutAlt />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to="/login" className='text-white'><FaSignInAlt /></Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
