import top from './Top.module.css';

function TopLine() {
    return (
        <div className={top.topLine}>
            <div className={top.topButtons}>
                <button className={top.Menu} type="button">Menu</button>
            </div>
        </div>
    );
}
export default TopLine;