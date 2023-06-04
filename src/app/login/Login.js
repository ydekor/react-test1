import style from './Login.module.css';

function Login() {
    const handleLogin = async () => {
        const loginInput = document.getElementById('loginInput').value;
        const passwordInput = document.getElementById('passwordInput').value;

        const response = await fetch('http://alwertus.zapto.org/spab/user/login', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               login: loginInput,
               password: passwordInput
           })
        });
        if(response.ok) {
            console.log('success');
        } else {
            console.log('error');
        }
    };

    return <div className={style.authentication}>
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
}

export default Login;