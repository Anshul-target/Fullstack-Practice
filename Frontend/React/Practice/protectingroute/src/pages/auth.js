import React from 'react';
import useAuthContext from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Auth = ({ children, authenticated = true }) => {
    const navigate = useNavigate();

    const { isLogged } = useAuthContext()
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("authenticated"));
        console.log(item);
        if (item == "Anshul") {
            navigate('/')
        }
    }, [])
    return <>
        {children}
        <h1>
            under Auth

        </h1>
    </>
};

export default Auth;
