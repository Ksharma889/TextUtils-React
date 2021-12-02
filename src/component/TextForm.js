import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    return (
        <div className="container my-5 py-4">
            <h1 className="title pb-2">{props.textareaTitle}</h1>
            <textarea placeholder="Enter text here" className="form-control" id="exampleFormControlTextarea" rows="8"></textarea>
            <div className="buttons my-2">
                <button type="button" className="btn btn-dark my-2 mx-1">Convert to Uppercase</button>
                <button type="button" className="btn btn-dark my-2 mx-1">Convert to Lowercase</button>
                <button type="button" className="btn btn-dark my-2 mx-1">Capitalize Text</button>
                <button type="button" className="btn btn-dark my-2 mx-1">Clear Text</button>
                <button type="button" className="btn btn-dark my-2 mx-1">Copy Text</button>
                <button type="button" className="btn btn-dark my-2 mx-1">Remove Extra Spaces</button>
            </div>
            <h3>Your Text Summary</h3>
            <p>0 word and 0 character</p>
            <p>0 Minutes to read</p>
            <h3>Preview</h3>
            <p>Enter something in the textarea above to preview it here</p>
        </div>
    )
}

TextForm.propTypes = {
    TextFormTitle: PropTypes.string
}

TextForm.defaultProps = {
    TextFormTitle: 'Enter the text to analyze below'
}
