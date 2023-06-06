import style from './Login.module.css';
import {useState} from "react";

function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async () => {
        let status = 0;

        const loginInput = document.getElementById('loginInput').value;
        const passwordInput = document.getElementById('passwordInput').value;

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: loginInput, password: passwordInput })
        };

        fetch('http://alwertus.zapto.org/spab/user/login', request)
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(data => {
                console.log('data', status, data);
                if(status === 200){
                    console.log('success', data);
                }else {
                    setErrorMessage(data.description);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className={style.authentication}>
            <div className={style.errorWindow}>{errorMessage}</div>
            <div className={style.content}>
                <div className={style.login}>login</div>
                <div className={style.loginTextField}>
                    <input id="loginInput" type="text" />
                </div>
                <div className={style.password}>password</div>
                <div className={style.passwordTextField}>
                    <input id="passwordInput" type="password" />
                </div>
                <div className={style.buttonLogin}>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;