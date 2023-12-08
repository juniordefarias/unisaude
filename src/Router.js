import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

export default function Router() {
    return (
        <Routes>
            <Route path="/" /* exact  */element={<Home />} />
            <Route path="/schedule" exact element={<Schedule />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/admin/:type" exact element={<Admin />} />
            <Route path="/admin" exact element={<Admin />} />
        </Routes>
    );
}