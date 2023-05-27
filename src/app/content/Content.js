import style from './Content.module.css';
import Comment from "../comments/Comments";
import React, {useState} from "react";

//const comments = { id: 1, name: 'user1', created: 'da', comment: 'text'}
//const comments = [{id: 1}, {name: 'user1'}, {created: 'da'}, {comment: 'text'}];

const arr = [
    {
        id: 1,
        name: 'anon1',
        created: '14.08.28',
        comment: 'awesome'
    },
    {
        id: 2,
        name: 'anon2',
        created: '11.09.15',
        comment: 'hi'
    },
    {
        id: 3,
        name: 'anon3',
        created: '22.02.13',
        comment: 'kal'
    },
    {
        id: 4,
        name: 'anon4',
        created: '22.02.13',
        comment: 'va'
    },
    {
        id: 5,
        name: 'anon5',
        created: '22.02.13',
        comment: 'suck'
    },

    {
        id: 6,
        name: 'anon6',
        created: '22.02.13',
        comment: 'ra'
    },
    {
        id: 7,
        name: 'anon7',
        created: '22.02.13',
        comment: 'huh'
    },
    {
        id: 8,
        name: 'anon8',
        created: '22.02.13',
        comment: 'uwu'
    },
    {
        id: 9,
        name: 'anon9',
        created: '22.02.13',
        comment: 'lmao'
    },
    {
        id: 10,
        name: 'anon10',
        created: '22.02.13',
        comment: 'G-man'
    },
]

function Content() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [comments, setComments] = useState(arr);

    const handleChange1 = (event) => {
        setText1(event.target.value);
    }
    const handleChange2 = (event) => {
        setText2(event.target.value);
    }

    const sendData = () => {
        const newArr = {
            id: comments.length + 1,
            name: text1,
            created: new Date().toLocaleDateString(),
            comment: text2,
        }
        setComments([...comments, newArr]);
        setText1('');
        setText2('');
    }

    return <div className={style.testWindow}>
        <div className={style.inputData}>
            <div><input type="text" className={style.inputName} placeholder={"input name"} value={text1} onChange={handleChange1} /></div>
            <div><input type="text" className={style.inputComment} placeholder={"input comment"} value={text2} onChange={handleChange2} /></div>
            {/*<p>{text1}</p>*/}
            {/*<p>{text2}</p>*/}
        </div>
        <div className={style.sendData}>
            <button onClick={sendData}>send</button>
        </div>
        <div>
            {comments.map(e => <Comment
                key={e.id}
                userName={e.name}
                userDate={e.created}
                commentText={e.comment}
            />)}
            {/*<Comment userName="oleg" userDate="22.02.13" commentText="dsadasdsadasdasADSdasdasdasdsa" />*/}
        </div>
    </div>
}
export default Content;