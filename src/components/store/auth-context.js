import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedin: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    return (<AuthContext.Provider 
                value={{
                    isLoggedIn: isLoggedIn,
                    onLogout: logoutHandler,
                    onLogin: loginHandler
                }}>
                    {props.children}
            </AuthContext.Provider>);
}
export default AuthContext;