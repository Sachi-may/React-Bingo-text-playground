import React from 'react'

export default function About(props) {
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#26264e':'white'
  }
    return (
    <>
    
    <div className='container' style={myStyle}>
    <h4 className='my-3'>     About Us</h4>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>What is Bingo text playground?</strong>
      </button>
    </h2>
    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Bingo Text play ground is a website which will provide you many features that can be applied to your text easily.
        The features are :
        <h5>Lowercase</h5>
        <h5>Uppercase</h5>
        <h5>Space removing</h5>
        <h5>Copy the text to the clipboard</h5>
        <h5>Counting for words and character</h5>
        <h5>Approximate time to read the text</h5>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>  
      </button>
    </h2>
    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Its a free web app to use . There is no need to pay any amount. You just need to have a device with internet connection and you can utilize this app any time you want.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Contact us </strong>
      </button>
    </h2>
    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h5>Email- sachishome26@gmail.com</h5>
        <h5>Phone- 8132017092</h5>
      </div>
    </div>
  </div>
  
</div>
      
    </div>
    </>
  )
}
