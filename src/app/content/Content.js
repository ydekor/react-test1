import style from './Content.module.css';
import Comments from "../comments/Comments";
import React from "react";

function Content() {
    return (
        <div className={style.testWindow}>
            <Comments userName="oleg" userDate="22.02.13" commentText="dsadasdsadasdasADSdasdasdasdsa" />
        </div>
    );
}
export default Content;