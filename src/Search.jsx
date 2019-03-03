import React, { Component } from 'react';

class Search extends Component{
  render(){
    return(
      <div className = 'formcontainer'>
        <h3 className = 'formtitle'>Where are you?</h3>
        <form>
          <input type = 'text' placeholder = 'Zipcode'>
          </input>
          <button type = 'submit'>
          Search
          </button>
        </form>
      </div>
      )
  }
}

export default Search;
