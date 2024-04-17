import './index.css'
import Intro from './components/Intro'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import  axios  from 'axios'
import MainPage from './components/MainPage'
import { UsercontextProvider } from './context/UserContext'; 
import UserRoute from './routes/user.routes'
import Try from './components/Try'
function App() {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <>
    <UsercontextProvider>
    <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<UserRoute />} />
      </Routes>
    </UsercontextProvider>
    </>
  )
}
export default App
