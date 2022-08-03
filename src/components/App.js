import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home.js';
import Nfts from './../pages/Nfts.js';

export default function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nfts" element={<Nfts />} />
        </Routes>
        </BrowserRouter>
    );
}