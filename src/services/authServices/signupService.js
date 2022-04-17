import axios from "axios"

export const signupService = (email, password, confirmPassword, firstName, lastName, age) => {

    return axios.post('/api/auth/signup', {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
        age: age
    });

};