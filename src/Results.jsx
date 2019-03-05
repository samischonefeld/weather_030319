import React, { Component } from 'react';

class Results extends Component{

  render(){
    console.log('this is props', this.props)
    return(
      <div>
      <h2> Location {this.props.location} </h2>
      <h3> Temperature {this.props.temp}</h3>
      <p> Description {this.props.description}</p>
      </div>
      )
  }
}

export default Results;
