import React from 'react'
import "./slider.css"

class Slider extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        value : 55
      }
    }
    handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  

  
  render() {
    return (
      <>
      <div className="slideContainer">

      <span className="text text-primary">
         0 &nbsp;
      </span>
      
      <input 
      className="slider"
      id="myRange" 
      type="range" 
      min="0" max="100" 
      defaultValue = "55"
      onChange={this.handleChange}
      list="tickmarks"
      step="1"/> 
      <span className="text text-primary">
        &nbsp; 100
      </span>
      
      <div className="sliderticks">
    <p>0</p>
    <p>20</p>
    <p>40</p>
    <p>60</p>
    <p>80</p>
    <p>100</p>
  </div>
      </div>


      <div className="slidervalue" >        
        <p>
          Current value =&nbsp;  
          {this.state.value}
          </p>
      </div>
    </>
    );
  }
}

export default Slider 