import React from "react";
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const Index = () => {
  return (
    <div>
      <Header />
      <h2>A Full Stack Developer</h2>
      <p>This is how you <Link to='/about'>link</Link> to an internal page.</p>
      <Footer />
    </div>
  )
}

export default Index
