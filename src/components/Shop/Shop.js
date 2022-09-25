import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='grid grid-cols-4 gap-3 px-16 mt-10'>
            <div className=" grid grid-cols-3 col-span-3 gap-4">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        />)
                }
            </div>
            <div className="col-span-1 bg-orange-200 p-4">
                <h3 className='font-semibold text-xl uppercase border-b-2 border-orange-500 py-2'>Hello Cart Summary</h3>
                <p className='font-semibold mt-4 text-lg'>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;