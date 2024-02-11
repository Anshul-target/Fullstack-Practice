import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';
const SignUp = () => {
    const navigate = useNavigate();
    const { isLogged, logout } = useAuthContext()

    useEffect(() => {
        // const item = JSON.parse(localStorage.getItem("authenticated"))
        // alert(item)
        // if (!item) {
        //     navigate("/login")
        // }
        alert(isLogged);
        !isLogged && navigate("/login")

    }, [])

    return (
        <>

            <button type='button' onClick={() => {

                logout()
                navigate("/login")
            }
            }>Logout</button>
        </>
    )
};
export default SignUp;
