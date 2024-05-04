import './index.css'
import Intro from './components/Intro'
import { Routes, Route, useLocation } from 'react-router-dom';
import Register from './components/Register'
import  axios  from 'axios'
import MainPage from './components/MainPage'
import { UsercontextProvider } from './context/UserContext'; 
import UserRoute from './routes/user.routes'
import Try from './components/Try'
import MenMainpage from './components/men/MenMainpage'
import MenRoute from './routes/men.routes'
import Navigation from './components/Navigation'
import Cateogory_SubCateogory from './components/basics/Cateogory_SubCateogory'
import Product from './components/basics/Product';
import Cart from './components/basics/Cart';
import ImageEnter from './components/basics/ImageEnter';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/basics/Checkout'
import Profile from './components/basics/Profile';
import { CheckoutContextProvider } from './context/CheckoutContext';
import Address from './components/basics/Address';
import { AddresscontextProvider } from './context/AddressContext';
import Search from './components/basics/Search';
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <UsercontextProvider>
      <AddresscontextProvider>
      <CartContextProvider>
        <CheckoutContextProvider>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<UserRoute />} />
        <Route path='/search/:search' element={<Search />} />

        <Route path='/home' element={<UserRoute />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/addproduct' element={<ImageEnter />} />
        <Route path='/men' element={<MenRoute />} />
        <Route path="/:categoryName/:subcategoryName" element={<Cateogory_SubCateogory/>} />
        <Route path="/product/:tagline/:id" element={<Product/>} />

      </Routes>
      </CheckoutContextProvider>
      </CartContextProvider>
      </AddresscontextProvider>
    </UsercontextProvider>
    </>
  )
}
export default App
