import React from 'react';
function UserPosts() {
    const posts = [
        "Learning React is fun!",
        "Just built my first React component.",
        "React makes frontend development easier."
    ];
    return (
        <div>
            <h3>User Posts:</h3>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
}
export default UserPosts;