import React from 'react';
import { Link } from 'react-router-dom';

function About(){
  return(
    <div className = "about">
      <header>
        <h1>ABOUT</h1>
      </header>
      <nav>
      </nav>
      <section>
        <h2>What's the weather all about?</h2>
        <p className = "about_p">This app was built using React JS, JSX, and CSS. It gathers weather data by fetching from the <a href = "openweathermap.org/api">OpenWeatherMap</a> API. <br/> Thanks for checking it out, hope you enjoyed!</p>
        <p>You can check out more of my work on my <a href = "https://github.com/samischonefeld">GitHub</a>.</p>
      </section>
      <li className = "home_link"><Link to = '/'>HOME</Link></li>
    </div>
    )
}

export default About;
