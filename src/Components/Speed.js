import React from 'react';

function speed(props) {
    if (props.symbols !== 0 && props.seconds !== 0) {
        const wpm = (props.symbols / 5) / (props.seconds / 60);
        return (
            <div>{Math.round(wpm)} wpm</div>
        )
    }
    return null;
}
export default speed;