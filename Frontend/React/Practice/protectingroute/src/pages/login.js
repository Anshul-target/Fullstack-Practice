import React, { useEffect, useState } from 'react';
import useAuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const { isLogged, login, logout } = useAuthContext()
    const [loggedIn, setLoggedIn] = useState(false)


    useEffect(() => {
        if (isLogged) {
            navigate("/dashboard")
        }

    }, [])





    return (
        <>
            <input type='text'></input>
            <button type='button' onClick={() => {

                login()
                // localStorage.setItem("authenticated", JSON.stringify("Anshul"));

                navigate("/")
            }
            }
            >Login</button>



        </>
    )

};
export default Login;
