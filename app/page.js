'use client';
import './globals.css';
import { OrderProvider } from './Context/OrderContext';
import Menu from './Components/Menu';
import OrderSummary from './Components/Ordersummary';

export default function HomePage() {
    return (
        <OrderProvider>
            <div> 
                <Menu />
                <OrderSummary />
            </div>
        </OrderProvider>
    );
}
