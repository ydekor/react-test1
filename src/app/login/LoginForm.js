import React from "react";
import style from "./Login.module.css";

const LoginForm = ({onLogin, onInputChange}) => {
    return <div className={style.content}>
            <div className={style.login}>login</div>
            <div className={style.loginTextField}>
                <input id="loginInput" type="text" onChange={onInputChange} />
            </div>
            <div className={style.password}>password</div>
            <div className={style.passwordTextField}>
                <input id="passwordInput" type="password" onChange={onInputChange} />
            </div>
            <div className={style.buttonLogin}>
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
}
export default LoginForm;