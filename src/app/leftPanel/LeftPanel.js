import style from './LeftPanel.module.css';

function LeftPanel({isVisible}) {
    return (
        <div className={`${style.sidePanel} ${isVisible ? '' : style.hidden}`}>111</div>
    );
}
export default LeftPanel;