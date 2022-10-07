import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart} = useLoaderData();//{products, initialCart}
    // console.log("products",products)
    const [cart, setCart] = useState(initialCart);
    // console.log('cart', cart);
    const handleRemoveItem = (id) => {
        const remainig = cart.filter(product => product.id !== id)
        setCart(remainig);
        removeFromDb(id)
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='grid lg:grid-cols-4 gap-3 px-16 mt-14'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 col-span-3 gap-4 rounded-lg mr-20">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}/>)
                }
                {
                    cart.length === 0 && <h2 className='text-4xl font-extrabold text-center text-pink-700 mt-24'> No Item For Review, Please.<Link className='underline text-pink-400' to='/'>Shop More</Link> </h2>
                }
            </div>
            <div className="cartContainer col-span-1 md:flex-col-reverse bg-orange-200 p-4">
                <Cart cart={cart} clearCart={clearCart} />
            </div>
        </div>
    );
};

export default Orders;