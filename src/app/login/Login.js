import style from './Login.module.css';
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";
import React, { useState } from "react";
import {handleLogin} from "./LoginApi";
import {handleLogout} from "./LogoutApi";

function Login({isLoggedIn, setIsLoggedIn}) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = () => {
        setErrorMessage('');
    };

    const drawErrorMsg = () => {
        return errorMessage && <div className={style.errorWindow}>{errorMessage}</div>
    }

    return <div className={style.authentication}>
        {drawErrorMsg()}
        {isLoggedIn
            ? <LogoutForm onLogout={() => handleLogout(setIsLoggedIn)} />
            : <LoginForm onLogin={() => handleLogin(isLoggedIn, setIsLoggedIn, setErrorMessage)} onInputChange={handleInputChange} />
        }
    </div>
}
export default Login;