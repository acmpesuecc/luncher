import React from 'react';
import { useState } from 'react'
import './Login.css'
import Form from '../../components/Form/Form';


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
                    Create Account
                </h2>

                <form>
                    <Form lists = {lists}/>
                </form>

                <div className="row button">
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;