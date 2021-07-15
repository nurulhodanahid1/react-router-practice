import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    const {name, email, phone, website} = friend;
    return (
        <div className="friend-container">
            <h3>This is friend details Component</h3>
            <h4>ID: {friendId}</h4>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default FriendDetail;