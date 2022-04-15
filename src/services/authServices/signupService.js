import axios from "axios"

export const signupService = (email, password, firstName, lastName) => {

    return axios.post('/api/auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

};