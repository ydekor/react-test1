import style from './LeftPanel.module.css';

function LeftPanel() {
    return (
        // <div className={`${style.sidePanel} ${isVisible ? '' : style.hidden}`}>111</div>
        <div className={style.sidePanel}>111</div>
        // <div>{isVisible && style.sidePanel}</div>
        //<div>{isVisible ? (<div className={style.sidePanel}>111</div>) : null}</div>

    );
}
export default LeftPanel;