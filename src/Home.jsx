import React, { Component } from 'react';
import Header from './Header.jsx';
import Results from './Results.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends Component {
    state = {
        zip: '',
        weather: '',
        temp: 'warm or cold',
        location: 'here or there',
        description: 'sun or rain',
    }

    handleChange(e) {
        let value = e.target.value
        this.setState({ zip: value })
    }

    fetchAPI() {
        let zip = this.state.zip;
        let url = `//api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=fecb88d974a5942d6be1e7a92c741227`
        fetch(url)
            .then(res => res.json())
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
            <div className = 'page_container'>
      <Header />
      <nav>
        <li><Link to = "/about">ABOUT</Link></li>
      </nav>
      <div className = "searchbar">
      <input
        className = "zipinput"
        onChange = {(e) => this.handleChange(e)}
        type = 'text' value = {this.state.zipcode}
        placeholder = 'zipcode'>
      </input>
      <button
        className = "submitbutton"
        onClick = {(e) => this.handleSubmit(e)}
        type = 'submit'>
        ENTER
      </button>
      </div>
      <Results
        temp = {this.state.temp}
        location = {this.state.location}
        description = {this.state.description} />
      <Footer />
      </div>
        );
    }
}

export default Home;
