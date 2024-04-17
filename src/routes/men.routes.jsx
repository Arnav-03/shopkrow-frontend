import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import UserRoute from './user.routes';
import MenMainpage from '../components/men/MenMainpage';
import Register from '../components/Register';
import MainPage from '../components/MainPage';
function MenRoute() {
    const { user } = useContext(UserContext);
        
        return user ? <MenMainpage /> : <Register />;
    }
    
export default MenRoute

