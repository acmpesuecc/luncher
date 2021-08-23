import React from 'react';
import { useState } from 'react'
import './Login.css'
import Form from '../../components/Form/Form';
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let lists = [
        {
            description: "Email",
            type: "text",
            placeholder: "",
            value: email,
            setValue: setEmail,
        },
        {
            description: "Password",
            type: "password",
            placeholder: "",
            value: password,
            setValue: setPassword,
        },
    ]

    return(
        <div className="login">
            <div className="loginForm">
                <h2 className="heading">
                    Login
                </h2>
                <hr/>

                <form>
                    <Form lists = {lists}/>
                </form>
                <br/><br/>
                <p className='forgot-password'>Forgot password?</p>
                <div className="row button">
                    <button>
                        Login
                    </button>
                </div>
                <br/><br/>
                <p>or login with,</p>
                <br/>
                <Link to="https://google.com" className="login-icons"><AiIcons.AiFillGoogleCircle/></Link>
                <Link to="https://facebook.com" className="login-icons"><RiIcons.RiFacebookCircleFill/></Link>
                <Link to="https://twitter.com" className="login-icons"><AiIcons.AiFillTwitterCircle/></Link>
                <br/><br/>
                <p className="last-line">Don't have an account? <Link to="/signup" className="signup-link">Sign Up.</Link></p>
            </div>
        </div>
    )
}

export default LoginForm;