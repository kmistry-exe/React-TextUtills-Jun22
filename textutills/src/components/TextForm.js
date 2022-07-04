import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleDoClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange =(event)=>{
        // console.log("On Change");ss
        setText(event.target.value); 
    }

    const handleClear =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success");
    }

    const[text,setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ?  'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" 
            style={{backgroundColor: props.mode === 'dark' ?  '#343A40':'white', color: props.mode === 'dark' ?  'white':'black'}}></textarea>
        </div>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleDoClick}>Convert to Lowercase</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>

    </div>

    <div className="container my-5" style={{color: props.mode === 'dark' ?  'white':'black'}}>
        <h3>Your text summary</h3>
        <p>
            {text.split(/\s./).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
