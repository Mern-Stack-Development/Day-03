import React, { useState, useEffect } from 'react';

export default function DependencyArray() {
    const [userId, setUserId] = useState(1);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, [userId]);

    return (
        <div>
            <h1>User Data</h1>
            <button onClick={() => setUserId(userId + 1)}>Load Next User</button>
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Email: {userData.email}</p>
                    <p>Username: {userData.username}</p>
                </div>
            )}
        </div>
    );
}
