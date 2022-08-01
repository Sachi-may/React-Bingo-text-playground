import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick= ()=>{

        let newText=textvar.toUpperCase();
        setTextt(newText);
        props.showAlert("Converted to uppercase","success");
        
    }
    const handleLowClick= ()=>{
        
        let newText=textvar.toLowerCase();
        setTextt(newText);
        props.showAlert("Converted to lower case","success");
        

    }
    const handleCopy=()=>{        
        navigator.clipboard.writeText(textvar);
        props.showAlert("Successfullty copied the text to the clipboard","success");
        

    }
    const removeExtraSpace= ()=>{
        
        let text=textvar.split(/[ ]+/);
        setTextt(text.join(" "));
        props.showAlert("Extra spaces has been removed","success"); 
        

    }
    const handleClearText= ()=>{
        
        let newTxt="";
        setTextt(newTxt);
        props.showAlert("Text cleared","success"); 
        

    }
    const handleOnChange= (event)=>{
        // console.log("onchance");
        setTextt(event.target.value);

    }
    const [textvar,setTextt]=useState("");

    return (
        <>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className='container'>
            <div className="mb-3">
    
                <textarea className="form-control" value={textvar} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={textvar.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={textvar.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={textvar.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
            <button disabled={textvar.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear text</button>
            <button disabled={textvar.length===0}className="btn btn-primary mx-2" onClick={handleCopy}>Copy Your Text</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Given Text Summary</h2>
            <p>{textvar.split(/\s+/).filter((ele)=> {return ele.length!==0}).length} and {textvar.length}</p>
            <p>{0.008*textvar.split(" ").filter((ele)=>{return ele.length!==0}).length}  minutes to read</p>
            <h3>Preview</h3>
            <p>{textvar.length>0?textvar:"There is nothing to preview"}</p>
        </div>
        </>
    )
}

TextForm.prototype = {
    textvar: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    textvar: "Enter Your text Here to play with it"

}