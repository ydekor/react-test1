import style from './Content.module.css';
import Comment from "../comments/Comments";
import React, {useState} from "react";

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
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingCommentText, setEditingCommentText] = useState('');

    const nameOnChange = (event) => {
        setName(event.target.value);
    };

    const commentOnChange = (event) => {
        setCommentText(event.target.value);
    };

    const addComment = () => {
        const newComment = {
            id: comments.length + 1,
            name: nameText,
            created: new Date().toLocaleDateString(),
            comment: commentText,
            votes: 0,
        };
        setComments([...comments, newComment]);
        setName('');
        setCommentText('');
    };

    const handleDelete = (id) => {
        const updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    };

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

    const handleEdit = (id, commentText) => {
        setEditingCommentId(id);
        setEditingCommentText(commentText);
    };

    const handleSaveComment = (id, commentText) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === id) {
                return { ...comment, comment: commentText };
            }
            return comment;
        });
        setComments(updatedComments);
        setEditingCommentId(null);
        setEditingCommentText('');
    };

    const handleCancel = () => {
        setEditingCommentId(null);
        setEditingCommentText('');
    };

    return (
        <div className={style.mainWindow}>
            <div className={style.inputData}>
                <div>
                    <input
                        type="text"
                        className={style.inputName}
                        placeholder="input name"
                        value={nameText}
                        onChange={nameOnChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className={style.inputComment}
                        placeholder="input comment"
                        value={commentText}
                        onChange={commentOnChange}
                    />
                </div>
            </div>
            <div className={style.sendData}>
                <button onClick={addComment}>send</button>
            </div>
            <div>
                {comments.map((e) => (
                    <Comment
                        key={e.id}
                        commentId={e.id}
                        userName={e.name}
                        userDate={e.created}
                        commentText={e.comment}
                        votes={e.votes}
                        onDelete={() => handleDelete(e.id)}
                        onVote={(type) => handleVote(e.id, type)}
                        onEdit={handleEdit}
                        onSave={handleSaveComment}
                        onCancel={handleCancel}
                        editingCommentId={editingCommentId}
                        editingCommentText={editingCommentText}
                        setEditingCommentText={setEditingCommentText}
                    />
                ))}
            </div>
        </div>
    );
}
export default Content;