import React from 'react';
import { Link } from 'react-router-dom';

function About(){
  return(
    <div>
      <header>
        <h1>ABOUT</h1>
      </header>
      <nav>
      </nav>
      <section>
      <h2>What's the weather all about?</h2>
      <p>This app was built using React JS, JSX, and CSS. It gathers weather data by fetching from the <a href = "openweathermap.org/api">OpenWeatherMap</a> API. Thanks for checking it out, hope you enjoyed!</p>
      </section>
      <li><Link to = '/'>HOME</Link></li>
    </div>
    )
}

export default About;
