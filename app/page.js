'use client';
import './globals.css';
import { OrderProvider } from './Context/OrderContext';
import Menu from './Components/Menu';
import OrderSummary from './Components/Ordersummary';

export default function HomePage() {
    return (
        <OrderProvider>
            <Menu />
            <div className="sticky bottom-0">
                <OrderSummary />
            </div>
        </OrderProvider>
    );
}
