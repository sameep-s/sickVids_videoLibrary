import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../util-context';
import Navbar from '../Navbar/Navbar';
import './signup.css';

const Signup = () => {

    const [signupFormData, setSignupFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        age: ""
    })

    const { user, signupUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/videoListing', { replace: true });
        }
    }, [user])

    const signupHandler = () => {
        const { email, password, confirmPassword, firstName, lastName, age } = signupFormData;

        signupUser(email, password, confirmPassword, firstName, lastName, age)
    }

    return (

        <>
            <Navbar />
            <main className="container-main__signup">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    signupHandler()
                }}
                    className="form-wrapper">
                    <div className="form-heading">Sign Up</div>
                    <div className="form-body">
                        <input
                            type="text"
                            name=""
                            id="email"
                            value={signupFormData.email}
                            onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
                            className="form-input mt-4"
                            autoComplete="off"
                            placeholder="Email Adderess"
                        />

                        <input
                            type="password"
                            name=""
                            id="password"
                            value={signupFormData.password}
                            onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
                            className="form-input mt-2"
                            autoComplete="off"
                            placeholder="Choose Password"
                        />

                        <input
                            type="password"
                            name=""
                            id="confirm-password"
                            value={signupFormData.confirmPassword}
                            onChange={(e) => setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })}
                            className="form-input mt-2"
                            autoComplete="off"
                            placeholder="Confirm Password"
                        />

                        <input
                            type="text"
                            name=""
                            id="fname"
                            value={signupFormData.firstName}
                            onChange={(e) => setSignupFormData({ ...signupFormData, firstName: e.target.value })}
                            className="form-input mt-2"
                            autoComplete="off"
                            placeholder="First Name"
                        />

                        <input
                            type="text"
                            name=""
                            id="lastName"
                            value={signupFormData.lastName}
                            onChange={(e) => setSignupFormData({ ...signupFormData, lastName: e.target.value })}
                            className="form-input mt-2"
                            autoComplete="off"
                            placeholder="Last Name"
                        />
                        <input
                            type="number"
                            name=""
                            id="age"
                            value={signupFormData.age}
                            onChange={(e) => setSignupFormData({ ...signupFormData, age: e.target.value })}
                            className="form-input mt-2"
                            autoComplete="off"
                            placeholder="Enter Your Age in Years."
                        />
                    </div>

                    <div className="form-utility mt-2">
                        <div className="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" className="form-checkbox" />
                            <label htmlFor="remembercheck " className="form-check ml-1">
                                Sign up for emails to get updates from FlipKicks.
                            </label>
                        </div>
                        <div className="form-utility-2 mt-2">
                            By creating an account, you agree to our <a href="" className="form-link">Privary Policy</a> and <a href="" className="form-link">Terms of service</a>
                        </div>
                    </div>

                    <div className="form-button mt-3">
                        <button type='button' onClick={() => signupHandler()} className="btn-sq btn-light">Join Us</button>
                    </div>

                    <div className="form-end form-utility mt-1">
                        Already have a Account? <Link to={'/login'} className="form-link">Log in</Link>
                    </div>
                </form>
            </main>
        </>
    )
}


export default Signup;