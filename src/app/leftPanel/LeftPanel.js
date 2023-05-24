import style from './LeftPanel.module.css';

function LeftPanel({isVisible}) {
    return (
        // <div className={`${style.sidePanel} ${isVisible ? '' : style.hidden}`}>111</div>
        <div><div>{isVisible && <div className={style.sidePanel}>111</div>}</div></div>
    );
}
export default LeftPanel;