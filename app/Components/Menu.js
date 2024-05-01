// use client
import React from 'react';
import { useOrder } from '../Context/OrderContext';

export default function Menu() {
    const { addToOrder, turnover, orderNumber } = useOrder();

    const menuItems = {
        burgers: [
            { name: 'Big Mac', price: 5, image: '/Images/big-mac.jpg' },
            {
                name: 'Quarter Pounder',
                price: 5,
                image: '/Images/quarter-pounder.jpg',
            },
            {
                name: 'Cheeseburger',
                price: 2,
                image: '/Images/cheeseburger.jpg',
            },
        ],
        drinks: [
            { name: 'Coke', price: 1, image: '/Images/coke.jpg' },
            { name: 'Sprite', price: 1, image: '/Images/sprite.jpg' },
            { name: 'Fanta', price: 1, image: '/Images/fanta.jpg' },
        ],
        desserts: [
            { name: 'Apple Pie', price: 1, image: '/Images/apple-pie.jpg' },
            { name: 'Sundae', price: 2, image: '/Images/sundae.jpg' },
        ],
        extras: [
            { name: 'French Fries', price: 2, image: '/Images/fries.jpg' },
            { name: 'Salad', price: 2, image: '/Images/salad.jpg' },
        ],
    };

    return (
        <div className="px-4 py-5 bg-yellow-50">
            <h1 className="text-2xl font-bold text-red-600 text-center mb-4">
                McDonald's Menu
            </h1>
            <div className="text-2xl font-bold text-red-600 text-right mb-4 flex justify-between">
                <div className="text-right ml-4">Order Number: {orderNumber}</div>
                total turnover: ${turnover}
            </div>
            {Object.keys(menuItems).map((category) => (
                <div
                    key={category}
                    className="bg-white p-3 shadow-md rounded-lg mb-4"
                >
                    <h3 className="text-lg font-semibold text-red-600">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {menuItems[category].map((item) => (
                            <div
                                key={item.name}
                                className="text-center border shadow-md px-4 py-5 bg-gray-50"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 mx-auto rounded-full"
                                />{' '}
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mt-1"
                                    onClick={() => addToOrder(item)}
                                >
                                    Add {item.name} - ${item.price}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
