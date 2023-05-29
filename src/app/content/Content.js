import style from './Content.module.css';
import Comment from "../comments/Comments";
import React, {useState} from "react";

//const comments = { id: 1, name: 'user1', created: 'da', comment: 'text'}
//const comments = [{id: 1}, {name: 'user1'}, {created: 'da'}, {comment: 'text'}];

const CommentsArr = [
    {
        id: 1,
        name: 'anon1',
        created: new Date().toLocaleDateString(),
        comment: 'awesome',
        votes: 0,
    },
    {
        id: 2,
        name: 'anon2',
        created: new Date().toLocaleDateString(),
        comment: 'hi',
        votes: 0,
    },
    {
        id: 3,
        name: 'anon3',
        created: new Date().toLocaleDateString(),
        comment: 'kal',
        votes: 0,
    },
    {
        id: 4,
        name: 'anon4',
        created: new Date().toLocaleDateString(),
        comment: 'va',
        votes: 0,
    },
]

function Content() {
    const [nameText, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(CommentsArr);

    const nameOnChange = (event) => {
        setName(event.target.value);
    }
    const commentOnChange = (event) => {
        setCommentText(event.target.value);
    }

    const addComment = () => {
            const newCommentsArr = {
            id: comments.length + 1,
            name: nameText,
            created: new Date().toLocaleDateString(),
            comment: commentText,
            votes: 0,
            }
        setComments([...comments, newCommentsArr]);
        setName('');
        setCommentText('');
    }

    const handleDelete = (id) => {
        const updateComments = comments.filter(comment => comment.id !== id);
        setComments(updateComments);
    }

    const handleVote = (id, type) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === id) {
                if (type === 'like') {
                    return { ...comment, votes: comment.votes + 1 };
                } else if (type === 'dislike') {
                    return { ...comment, votes: comment.votes - 1 };
                }
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return <div className={style.mainWindow}>
        <div className={style.inputData}>
            <div><input type="text" className={style.inputName} placeholder={"input name"} value={nameText} onChange={nameOnChange} /></div>
            <div><input type="text" className={style.inputComment} placeholder={"input comment"} value={commentText} onChange={commentOnChange} /></div>
        </div>
        <div className={style.sendData}>
            <button onClick={addComment}>send</button>
        </div>
        <div>
            {comments.map(e => <Comment
                key={e.id}
                userName={e.name}
                userDate={e.created}
                commentText={e.comment}
                votes={e.votes}
                onDelete={() => handleDelete(e.id)}
                onVote={(type) => handleVote(e.id, type)}
            />)}
            {/*<Comment userName="oleg" userDate="22.02.13" commentText="dsadasdsadasdasADSdasdasdasdsa" />*/}
        </div>
    </div>
}
export default Content;