import React, { Component } from 'react';

class Results extends Component{

  render(){
    console.log('this is props', this.props)
    return(
      <div className = 'results_container'>

      <h2>Location</h2>
      <h1> {this.props.location} </h1>
      <h2> Temperature </h2>
      <h1> {this.props.temp + '°'} </h1>
      <h2> Description </h2>
      <h1> {this.props.description} </h1>
      </div>
      )
  }
}

export default Results;
