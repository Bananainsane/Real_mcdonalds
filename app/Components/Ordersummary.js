// use client
import React from 'react';
import { useOrder } from '../Context/OrderContext';

export default function OrderSummary() {
    const { order, removeFromOrder, removeAllFromOrder, confirmOrder, total } = useOrder();

    return (
        <div className="px-4 py-5 mt-5 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-bold text-red-600">Your Order</h2>
            <ul className="list-disc pl-5">
                {order.map((item, index) => (
                    <li
                        key={index}
                        className="mt-2 text-gray-600 flex justify-between items-center"
                    >
                        <span>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 inline-block rounded-full"
                            />
                            {item.name} - ${item.price} x {item.quantity}
                        </span>
                        <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => removeAllFromOrder(item.name)}
                        >
                            Remove ALL
                        </button>
                        <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => removeFromOrder(item.name)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-red-600">
                    Total: ${total}
                </h3>
                <button
                    className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                    onClick={confirmOrder}
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
}
