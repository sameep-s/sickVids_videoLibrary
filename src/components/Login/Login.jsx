import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./login.css";

const Login = () => {
    return (

        <>
            <Navbar />
            <main className="container-main__login">
                <form action="" className="form-wrapper">
                    <div className="form-heading">Welcome Back</div>

                    <div className="form-body">

                        <label htmlFor="email" className="form-label mt-3">
                            Enter your Email.
                        </label>

                        <input
                            type="text"
                            name=""
                            id="email"
                            className="form-input mt-1"
                            autoComplete="off"
                        />

                        <label htmlFor="password" className="form-label mt-3">
                            Enter your password
                        </label>

                        <input
                            type="password"
                            name=""
                            id="password"
                            className="form-input mt-1"
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-utility mt-2">

                        <div className="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" className="form-checkbox" />

                            <label htmlFor="remembercheck " className="form-check ml-1">
                                Remember Me
                            </label>

                            <a href="" className="forgot-pwrd">Forgot Password?</a>
                        </div>

                        <div className="form-utility-2 mt-2">
                            By logging in, you agree to our
                            <a href="" className="form-link"> Privary Policy</a> and
                            <a href="" className="form-link"> Terms of service.</a>
                        </div>

                    </div>

                    <div className="form-button mt-3">
                        <button className="btn-sq btn-light">Login</button>
                        <button className="btn-sq mt-2">Test Login</button>
                    </div>

                    <div className="form-end form-utility mt-1">
                        Not a Member? <Link to={'/signup'} className="form-link">Sign in.</Link>
                    </div>

                </form>

            </main>

        </>
    );
}

export default Login;