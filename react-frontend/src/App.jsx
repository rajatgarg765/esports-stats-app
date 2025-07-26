import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Layout from './Layout'; // Layout will now contain Header and Footer
import './index.css'; // Global CSS

const App = () => {
    return (
        <Router>
            <Routes>
                {/* The Layout component will render the header and footer,
                    and its <Outlet /> will render the matched child route component (Home or Events) */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> {/* Home page at "/" */}
                    <Route path="/events" element={<Events />} /> {/* Events page at "/events" */}
                    {/* Add more routes here as you build other pages (e.g., /teams, /players) */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
