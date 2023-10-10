import React, { useState, useContext, createContext, useLayoutEffect } from "react";
//import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
    isAuth: false,
    login: () => {},
    logout: () => {},
});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={AuthValue()}>
            {children}
        </AuthContext.Provider>
    );
}

function AuthValue() {
    const [isAuth, setIsAuth] = useState(false);
    //const navigate = useNavigate()

    const login = (username) => {
        if(username === "Ziyi"){
            localStorage.setItem("access-token", username);
            localStorage.setItem("username", username);
            setIsAuth(true);
            //navigate('/home')
            return true;
        }else{
            setIsAuth(false);
            return false
        }
    };

    const logout = () => {
        localStorage.removeItem("access-token");
        localStorage.removeItem("username");
        setIsAuth(false);
    };

    useLayoutEffect(() => {
        setIsAuth(!!localStorage.getItem("access-token"));
    }, []);

    return {
        isAuth,
        login,
        logout
    };
}

export const authContext = () => useContext(AuthContext);
export default AuthProvider;

