import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
 
  return (
    <>
      <BrowserRouter>
    <AuthContextProvider>
     

        <Routes>
        
          <Route exact path='/' element={
            <>
            <Navbar/>
            <Home />
            </>
          }>

          </Route>

          <Route exact path='/shop' element={
            <>
              <Navbar/>
              <Shop/>
            </>
          }>
        </Route>

          <Route exact path='/login' element={
            <>
              <Login/>
            </>
          }>
        </Route>
        </Routes>

      </AuthContextProvider>  
  </BrowserRouter>


    </>
  );
}

export default App;
