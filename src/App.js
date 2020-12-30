import React from 'react';
import './App.css';
import Header from './componenets/Header';
import Hero from './componenets/Hero';
import Home from './containers/Home';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/post';
import aboutUs from './componenets/aboutUS';
import Footer from './componenets/footer';

function App() {
  return (

    <Router>
         <div className="App">
      <Header></Header>
      <Hero></Hero>

      <Route path="/" exact component={Home}></Route>

     
      <Route path="/about-us"  component={aboutUs}></Route>
      <Route path="/contact-us"  component={ContactUs}></Route>
      <Route path="/post/:postid"  component={Post}></Route>


      <Footer></Footer>

      
    </div>


    </Router>
   
  );
}

export default App;
