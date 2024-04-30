// use client
import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function useOrder() {
    return useContext(OrderContext);
}

export const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    const addToOrder = (newItem) => {
        setOrder((prev) => {
            const existingItem = prev.find(
                (item) => item.name === newItem.name
            );
            if (existingItem) {
                return prev.map((item) =>
                    item.name === newItem.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeFromOrder = (itemName) => {
        setOrder((prev) =>
            prev.reduce((acc, item) => {
                if (item.name === itemName) {
                    if (item.quantity > 1) {
                        // Decrease the quantity
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };

    
    const removeAllFromOrder = (itemName) => {
        if (window.confirm(`Are you sure you want to remove all ${itemName} from the order?`)) {
            setOrder((prev) => prev.filter((item) => item.name !== itemName));
        }
    }


    return (
        <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, removeAllFromOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
