import React, { Component } from 'react';
import Header from './Header.jsx';
import Results from './Results.jsx';
import './App.css';


class App extends Component {
  state = {
    zip: '',
    weather: '',
    temp: '',
    location: '',
    description: '',
  }

  handleChange(e) {
    let value = e.target.value
    this.setState({zip: value})
  }

  fetchAPI(){
    let zip = this.state.zip;
    let url = `//api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=fecb88d974a5942d6be1e7a92c741227`
    fetch (url)
    .then (res => res.json())
    .then(data => {
      console.log(data)
      this.setState(preState => ({
        weather: data,
        temp: data.main.temp,
        location: data.name,
        description: data.weather[0].main,
      }))
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.fetchAPI()
  }

  render() {
    console.log('this is state', this.state)
    return (
      <div>
      <Header />
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
      <Results
        temp = {this.state.temp}
        location = {this.state.location}
        description = {this.state.description} />
      </div>
    );
  }
}

export default App;
