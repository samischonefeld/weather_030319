import React, { Component } from 'react';

class Results extends Component{
  componentDidUpdate(){
    console.log('this is props', this.props)
  }
  render(){
    return(
      <div>
      <h1> Weather </h1>
      <h2> Temperature </h2>
      <p> Description </p>
      </div>
      )
  }
}

export default Results;
