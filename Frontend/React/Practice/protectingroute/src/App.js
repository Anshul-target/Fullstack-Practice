import React from 'react';
import useAuthContext from './context/AuthContext';
// import './style.css';


export default function App() {
  const { isLogged } = useAuthContext();



  return (
    <>
      <h1>This is main page</h1>
    </>
  );
}
