import style from './LeftPanel.module.css';
import {View} from "../helper/LeftButtons";

function LeftPanel({setCurrentView, isLoggedIn}) {
    const showMain = () => {
        setCurrentView(View.Main);
    }
    const showLogin = () => {
        setCurrentView(View.Login);
    }

    return <div className={style.sidePanel}>
        <div className={style.buttons}>
            {isLoggedIn && (
                <div>
                    <button className={style.button} onClick={showMain}>
                        {View.Main}
                    </button>
                </div>
            )}
            <div><button className={style.button} onClick={showLogin}>{View.Login}</button></div>
        </div>
    </div>
}
export default LeftPanel;