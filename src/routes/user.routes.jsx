import React, { useContext } from 'react'
import MainPage from '../components/MainPage';
import Register from '../components/Register';
import { UserContext } from '../context/UserContext';

const UserRoute = () => {
    const { user } = useContext(UserContext);
    
    return user ? <MainPage /> : <Register />;
}

export default UserRoute
