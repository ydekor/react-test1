import React from "react";
import style from "./Login.module.css";

const LogoutForm = ({onLogout}) => {
    return (
        <div className={style.content}>
            <div className={style.buttonLogout}>
                <button onClick={onLogout}>Выход</button>
            </div>
        </div>
    );
}
export default LogoutForm;