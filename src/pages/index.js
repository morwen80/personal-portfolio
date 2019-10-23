import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <h2>A Full Stack Developer</h2>
      <p>This is how you <Link to='/about'>link</Link> to an internal page.</p>
    </Layout>
  )
}

export default Index
