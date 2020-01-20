import React from 'react';

function preview(props) {
    const text = props.text.split('');
    //split text into an array

    return (
        <div className="p-3 mb-4 textArea">
            {
                text.map((symbol, i) => {
                    let color;
                    if (i < props.userInput.length) {
                        color = symbol === props.userInput[i] ? 'green' : 'red';
                        //if the text is correct it should be green else it's red
                    }
                    return <span key={i} style={{ backgroundColor: color }}>{symbol}</span>
                })
            }
        </div>
    )
}
export default preview;