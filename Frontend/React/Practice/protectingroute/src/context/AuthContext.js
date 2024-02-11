import { useContext, createContext, useState } from "react";






export const AuthContext = createContext({

})

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    function login() {
        setIsLogged((prev) => true)
    }

    function logout() {
        setIsLogged((prev) => false)
    }

    return (

        < AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )


}

export default function useAuthContext() {
    return useContext(AuthContext)
}