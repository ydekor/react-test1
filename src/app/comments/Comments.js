import style from './Comments.module.css';
import React from "react";
//import Content from "../content/Content";

function Comment(props) {

    return <div className={style.comment}>
        <div className={style.headerCom}>
            <div className={style.headerAuthor}>
                <div className={style.userDetails}>
                    <div className={style.userName}>{props.userName}</div>
                    <div className={style.userDate}>{props.userDate}</div>
                </div>
                <div className={style.rightAlign}>
                    <button className={style.buttonDelete} onClick={props.onDelete}>✖</button>
                </div>
            </div>
            <div className={style.contentCom}>
                {props.commentText}
            </div>
            <div className={style.buttonsCom}>
                <button className={style.buttonLike}>like</button>
                <button className={style.buttonDis}>dislike</button>
            </div>
        </div>
    </div>
}

export default Comment;