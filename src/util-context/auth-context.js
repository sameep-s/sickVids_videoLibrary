import axios from 'axios';
import React, { createContext } from 'react';

const AuthContext = createContext();


const signupHandler = async () => {
    try {
        const response = await axios.post("/api/auth/login", {
            email: "sameep@gmail.com",
            password: "password123",
        });

        // saving the encodedToken in the localStorage
        console.log(`responseData`, response);
        localStorage.setItem("token", response.data.encodedToken);

    } catch (error) {
        console.log(error);
    }
};


const AuthProvider = ({ children }) => {


    // signupHandler();
    const encodedToken = localStorage.getItem("token");
    console.log(encodedToken);

    localStorage.removeItem("token");
    console.log(encodedToken);



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
