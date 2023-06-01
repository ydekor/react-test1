import style from './Login.module.css';

function Login() {
    return <div className={style.authentication}>
        <div className={style.content}>
            <div className={style.login}>login</div>
            <div className={style.loginTextField}>
                <input type="text" />
            </div>
            <div className={style.password}>password</div>
            <div className={style.passwordTextField}>
                <input type="text" />
            </div>
            <div className={style.buttonLogin}>
                <button>Login</button>
            </div>
        </div>
    </div>

}

export default Login;