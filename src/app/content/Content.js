import style from './Content.module.css';
import Comment from "../comments/Comments";
import React from "react";

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
    return (
        <div className={style.testWindow}>
            {arr.map(e => <Comment
                userName={e.name}
                userDate={e.created}
                commentText={e.comment}
            />)}
            {/*<Comment userName="oleg" userDate="22.02.13" commentText="dsadasdsadasdasADSdasdasdasdsa" />*/}
        </div>
    );
}
export default Content;