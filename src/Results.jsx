import React, { Component } from 'react';

class Results extends Component{

  render(){
    console.log('this is props', this.props)
    return(
      <div className = 'results_container'>
      <div className = "result_container">
        <h2 className = "category">Location</h2>
        <h1 className = "category"> {this.props.location} </h1>
      </div>
      <div className = "result_container">
        <h2 className = "category"> Temperature </h2>
        <h1 className = "category"> {this.props.temp + '°'} </h1>
      </div>
      <div className = "result_container">
        <h2 className = "category"> Description </h2>
        <h1 className = "category"> {this.props.description} </h1>
      </div>
      </div>
      )
  }
}

export default Results;
