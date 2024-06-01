import React from 'react';
import { FaPlus } from 'react-icons/fa';

type ProductsProps = {
    productId: string;
    photo: string;
    name: string;
    price: string;
    stock: string;
    handler: () => void;
}

const ProductCard = ({
    productId, photo, name,
    price, stock, handler }: ProductsProps) => {
    return (
        <div className='productcard relative  overflow-hidden shadow-lg w-1/5 p-4 mx-2 my-4 hover:shadow-xl transition duration-300'>
            <img src={photo} alt={name} className='h-52 w-full' />
            <div className='flex flex-col justify-center items-center mt-4'>
                <p className='text-lg font-medium mb-2 text-center'>{name}</p>
                <p className='text-gray-600 font-semibold mb-2'> {price}</p>
                <button onClick={() => handler()} className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transform hover:scale-105 transition duration-300 relative z-10'>
                    <FaPlus className='text-lg text-white' />
                </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 z-0"></div>
        </div>
    )
}

export default ProductCard;
