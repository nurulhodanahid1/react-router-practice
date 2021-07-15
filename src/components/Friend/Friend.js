import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const User = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    function handleClick(friendId) {
        const url = `/friend/${friendId}`;
        history.push(url);
      }
    return (
        <div className="friend-container">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            {/* <h4><Link to={`/friend/${id}`}>Show details of id: {id}</Link></h4> */}
            <button onClick={() => handleClick(id)}>Click me for details information</button>
        </div>
    );
};

export default User;