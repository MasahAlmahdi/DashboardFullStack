import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import requireAuth from './HOC/requireAuth.tsx';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Register from './Components/Register'
import "react-toastify/dist/ReactToastify.css"



const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
};

export default App;
