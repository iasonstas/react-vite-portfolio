/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
