import React from 'react';
function UserInfo() {
    const user = {
        name: "Tarun Srikumar",
        email: "tarun.srikumar2023@vitstudent.ac.in",
        bio: "A passionate web developer learning React."
    };
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
}
export default UserInfo;