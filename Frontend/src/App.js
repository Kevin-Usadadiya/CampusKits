import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ScrolltoTop from '../src/components/ScrollToTop/ScrollToTop'
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
    <>
      <BrowserRouter>
    <AuthContextProvider>
    <ScrolltoTop/>

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
              <Navbar/>
              <Login/>
            </>
          }>
        </Route>
          <Route exact path='/signup' element={
            <>
              <Navbar/>
              <Signup/>
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
