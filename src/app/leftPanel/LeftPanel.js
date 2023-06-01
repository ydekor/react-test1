import style from './LeftPanel.module.css';

function LeftPanel({setCurrentView}) {
    const showMain = () => {
        setCurrentView('main');
    }
    const showLogin = () => {
        setCurrentView('login');
    }

    return (
        <div className={style.sidePanel}>
            <div className={style.buttons}>
                <div><button className={style.button} onClick={showMain}>main</button></div>
                <div><button className={style.button} onClick={showLogin}>login</button></div>
            </div>
        </div>
    );
}
export default LeftPanel;