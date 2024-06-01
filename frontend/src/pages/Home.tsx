import React from 'react';
import ProductCard from '../components/ProductCard';

const AddToCartHandler = () => { };

const Home = () => {
    return (
        <div>
            <div className='mt-10 flex flex-col items-center'> {/* Centering vertically */}
                <div className='flex justify-center items-center'>
                    <img className='w-10/12' src='./cover.jpg' alt='Cover' />
                </div>
                <p className='mt-4 font-semibold text-2xl text-gray-600'>
                    LATEST PRODUCTS
                </p>
            </div>
            <main className='mt-4'>
                <ProductCard
                    productId='6464'
                    handler={AddToCartHandler}
                    photo='https://m.media-amazon.com/images/I/7186fXMtRHL._SY342_.jpg'
                    name='The Tibetan Book of Dead'
                    price='$222'
                    stock='222'
                />
            </main>
        </div>
    );
};

export default Home;
