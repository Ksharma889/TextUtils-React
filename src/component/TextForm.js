import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpperTextClick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerTextClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalizeTextClick = ()=>{
        const capitalizeText = (capText)=>{
            return capText.toLowerCase().split(" ").map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(" ");
        }
        const newText = capitalizeText(text);
        setText(newText);
    }

    const handleClearTextClick = ()=>{
        const newText = "";
        setText(newText);
    }

    const handleCopyTextClick = ()=>{
        navigator.clipboard.writeText(text);
    }

    const handleRemoveExtraSpaces = ()=>{
        const newText = text.replace(/\s+/g,' ');
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div className="container my-5 py-4">
            <h1 className="title pb-2">{props.TextFormTitle}</h1>
            <textarea placeholder="Enter text here" value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea" rows="8"></textarea>
            <div className="buttons my-2">
                <button type="button" onClick={handleUpperTextClick} className="btn my-2 mx-1">Convert to Uppercase</button>
                <button type="button" onClick={handleLowerTextClick} className="btn my-2 mx-1">Convert to Lowercase</button>
                <button type="button" onClick={handleCapitalizeTextClick} className="btn my-2 mx-1">Capitalize Text</button>
                <button type="button" onClick={handleClearTextClick} className="btn my-2 mx-1">Clear Text</button>
                <button type="button" onClick={handleCopyTextClick} className="btn my-2 mx-1">Copy Text</button>
                <button type="button" onClick={handleRemoveExtraSpaces} className="btn my-2 mx-1">Remove Extra Spaces</button>
            </div>
            <h3>Your Text Summary</h3>
            <p>{((text.trim().split(" ")).filter((e) => e !== "")).length} word and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p className='preview'>{text.length>0? text : 'Enter something in the textarea above to preview it here'}</p>
        </div>
    )
}

TextForm.propTypes = {
    TextFormTitle: PropTypes.string
}

TextForm.defaultProps = {
    TextFormTitle: 'Enter the text to analyze below'
}
