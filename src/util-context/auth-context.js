import axios from 'axios';
import React, { createContext } from 'react';

const AuthContext = createContext();


const signupHandler = async () => {
    try {
        const response = await axios.post("/api/auth/signup", {
            email: 'sameep@gmail.com',
            password: 'sameep123'
        });
        console.log(response);

        // saving the encodedToken in the localStorage
        console.log(response);
        localStorage.setItem("token", response.data.encodedToken);

    } catch (error) {
        console.log(error);
    }
};

signupHandler();

const token = localStorage.getItem("token");
console.log(token);


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
