import React from 'react';
const Auth = ({ children, authenticated = true }) => {
    return <>
        {children}
        <h1>
            under Auth

        </h1>
    </>
};

export default Auth;
