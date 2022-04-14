import axios from 'axios';
import React, { createContext } from 'react';

const AuthContext = createContext();


const signupHandler = async () => {
    try {
        const response = await axios.post("/api/auth/signup", {
            firstName: "Adarh",
            lastName: "Bali",
            email: "adabalssika@neog.camp",
            password: "rshBalika",
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
        console.log(error);
    }
};



console.log(signupHandler());


const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };
