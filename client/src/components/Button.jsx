import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button type='button' style={{ padding: '2%', margin: '4px'}}  className="btn-primary">{props.content}</button>
        </div>
    )
}


export default  Button
