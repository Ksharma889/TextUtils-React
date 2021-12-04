import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className="container alert-container w-100 position-relative my-2">
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}!
            </div>
        </div>
    )
}
