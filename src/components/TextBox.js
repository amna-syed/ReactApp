import React, {useState} from 'react'



export default function TextBox(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")

    }
    const handleOnChange = (e) =>{
        
        setText(e.target.value);

    }
    const handleLoClick = () =>{
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")

    }
    const handleAltClick = () =>{
        var newText = text.toLowerCase();
        let arr = [];
        for (let i = 0; i< newText.length; i++) {
          const char=i%2 == 0 ? newText[i].toUpperCase() : newText[i];
          arr.push(char);
        }
        var newText = arr.join('');
        setText(newText);
        props.showAlert("Converted to AlternatingCase", "success")


     

    }
    const handleClrClick=()=>{
        setText("");
        props.showAlert("Text Cleared", "success")
    }
  
    const [text, setText] = useState("");
    
    
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"? "white": "#212529"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="dark"? "#212529": "white" , color: props.mode==="dark"? "white": "#212529"}} onChange={handleOnChange} id="text" rows="8"></textarea>
        </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to UpperCase</button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick} >Convert to LowerCase</button>
    <button className='btn btn-primary mx-1' onClick={handleAltClick} >Convert to AlternatingCase</button>
    <button className='btn btn-primary mx-1' onClick={handleClrClick} >Clear Text</button>

  
    </div>
    <div className="container" style={{color: props.mode==="dark"? "white": "#212529"}}>
        <h2>Your Text summary</h2>
        <p>{text.trim() ? `${text.trim().split(' ').length} words and ${text.length} characters` : '0 words and 0 characters'}</p>
        
 
        
        
        <p>{text.trim() ? `${0.008*text.trim().split(' ').length} Minutes read` : '0 Minutes read'}</p>
        <h2>Preview</h2>
        <p>{text===""?"Enter text to preview": text}</p>
    </div>
    </>
  )
}
