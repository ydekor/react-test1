import React, {useState} from "react";
import style from "./Login.module.css";

const LoginForm = ({onLogin, onInputChange}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const setNewLogin = (event) => {
        setLogin(event.target.value)
        onInputChange()
    }
    const setNewPassword = (newVal) => {
        setPassword(newVal.target.value)
        onInputChange()
    }

    return <div className={style.content}>
            <div className={style.login}>login</div>
            <div className={style.loginTextField}>
                <input id="loginInput" type="text" value={login} onChange={setNewLogin} />
            </div>
            <div className={style.password}>password</div>
            <div className={style.passwordTextField}>
                <input id="passwordInput" type="password" value={password} onChange={setNewPassword} />
            </div>
            <div className={style.buttonLogin}>
                <button onClick={() => {onLogin(login, password)}}>Login</button>
            </div>
        </div>
}
export default LoginForm;