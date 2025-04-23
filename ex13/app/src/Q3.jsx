import React from 'react';
function StyledMessage() {
    const style = {
        color: 'blue',
        fontSize: '20px'
    };
    return <p style={style}>This is a styled message.</p>;
}
export default StyledMessage;