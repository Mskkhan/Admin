import React from 'react'
import Layout from '../../Components/Layout'
import { Jumbotron } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import './style.css';
import Footer from '../../Components/Footer/footer';
/**
* @author
* @function Home
**/

const Home = (props) => {

  return (
    <Layout sidebar>
    
    
      <Jumbotron style={{ margin: '5rem' }} className="text-center">
        <h1>Welcome to Admin </h1>
        <p >With this dashboard retailers will be able to track where their revenue comes from as well as what their customer profile is from their geographic location to their online behavior

          Combine your E-commerce platform data with your Google Analytics, social media and marketing applications' data to learn what drives your sales and business. Get more information on how your customers respond to your campaigns and what triggers orders.</p>
      </Jumbotron>
      <Jumbotron style={{ margin: '5rem' }} className="text-center">
        
        <p >With this dashboard retailers will be able to track where their revenue comes from as well as what their customer profile is from their geographic location to their online behavior

          Combine your E-commerce platform data with your Google Analytics, social media and marketing applications' data to learn what drives your sales and business. Get more information on how your customers respond to your campaigns and what triggers orders.</p>
      </Jumbotron>
      {/* <Footer/> */}
    </Layout>
  )

}

export default Home