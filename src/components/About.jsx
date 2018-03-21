import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return(
	  <div>
	    <Link to="/">HOME</Link>
        <h1>This is the big time about page!</h1>
      </div>
    );
  }
}

export default About;