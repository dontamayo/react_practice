import React from 'react'

const userInput = (props) => {
    const inputstyle ={
        border: '2px solid red',
        placeHolder: 'text here'
    }
    return <input 
    type="text" 
    style={inputstyle}
    onChange={props.changed}
    value={props.currrentName} />
}

export default userInput;