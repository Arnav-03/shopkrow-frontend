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
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <UsercontextProvider>

    <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<UserRoute />} />
        <Route path='/home' element={<UserRoute />} />
        <Route path='/men' element={<MenRoute />} />
        <Route path="/:categoryName/:subcategoryName" element={<Cateogory_SubCateogory/>} />
        <Route path="/product/:tagline/:price" element={<Product/>} />

      </Routes>
    </UsercontextProvider>
    </>
  )
}
export default App
