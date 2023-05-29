import style from './Comments.module.css';
import React from "react";
//import Content from "../content/Content";

function Comment(props) {
    // const [votes, setVotes] = useState(0);
    // const handleVote = (type) => {
    //     if (type === 'like') {
    //         setVotes(votes + 1);
    //     } else if (type === 'dislike') {
    //         setVotes(votes - 1);
    //     }
    // };
    const voteCountColor = props.votes > 0 ? 'green' : props.votes < 0 ? 'red' : '';


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
                <button className={style.buttonLike} onClick={() => props.onVote('like')}>like</button>
                <button className={style.buttonDis} onClick={() => props.onVote('dislike')}>dislike</button>
                {props.votes !== 0 && (
                    <span className={style.voteCount} style={{ color: voteCountColor }}>{props.votes}</span>
                )}
            </div>
        </div>
    </div>
}

export default Comment;