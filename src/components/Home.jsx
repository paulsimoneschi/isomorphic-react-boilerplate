import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/about">ABOUT</Link>
    <h1>This is the big time home page!</h1>
  </div>
);

export default Home;
