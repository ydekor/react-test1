import style from './Top.module.css';

function TopLine({toggleSidePanel}) {
    return (
        <div className={style.topLine}>
            <div className={style.topButtons}>
                <button className={style.Menu} type="button" onClick={toggleSidePanel}>Menu</button>
            </div>
        </div>
    );
}
export default TopLine;