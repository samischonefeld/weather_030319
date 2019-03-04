import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    title: '',
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let encodedTitle = encodeURI(this.state.title)
    fetch(`https://www.goodreads.com/search.xml?key=zpjgXvUE4HXjFSvSwDTStg&q=${encodedTitle}`)
    .then((res) => {
      console.log(res.json())
      return res.json()
    })
  }

  render() {
    return (
      <div>
      <input
        onChange = {(e) => this.handleChange(e)}
        type = 'text' value = {this.state.zipcode}
        placeholder = 'zipcode'>
      </input>
      <button
        onClick = {(e) => this.handleSubmit(e)}
        type = 'submit'>
        ENTER
      </button>
      </div>
    );
  }
}

export default App;
