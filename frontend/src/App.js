import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import DogManager from './pages/DogManager';
import AddDog from './pages/AddDog';
import DogListPage from './pages/DogListPage';
import TopHead from './components/TopHead';
import Header from './components/Header';
import Footer from './components/Footer';
import NavbarLogged from './components/NavbarLogged';
import Navbar from './components/Navbar';
import { useState } from 'react';
import UserContext from './Contexts/UserContext';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const getRole = localStorage.getItem('isAdmin');
  const isLogged = localStorage.getItem('accessToken');

  return (
    <UserContext.Provider value={{isAdmin, setIsAdmin, isLogged}}>
      <Router>
        <TopHead />
        <Header />
        { (isLogged && getRole === "admin") ? (
          <NavbarLogged />
        ) : (
          <Navbar />
        )}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dog-manager' element={<DogManager />} />
            <Route path='/add-dog' element={<AddDog />} />
            <Route path='/dogpage' element={<DogListPage />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
