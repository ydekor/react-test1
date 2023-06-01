import style from './LeftPanel.module.css';

function LeftPanel({setCurrentView}) {
    const View = {
        Main: 'main',
        Login: 'login'
    }

    const showMain = () => {
        setCurrentView(View.Main);
    }
    const showLogin = () => {
        setCurrentView(View.Login);
    }

    return (
        <div className={style.sidePanel}>
            <div className={style.buttons}>
                <div><button className={style.button} onClick={showMain}>{View.Main}</button></div>
                <div><button className={style.button} onClick={showLogin}>{View.Login}</button></div>
            </div>
        </div>
    );
}
export default LeftPanel;