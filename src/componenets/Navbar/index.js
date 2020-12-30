import React, {useState} from 'react'

import {NavLink} from 'react-router-dom';

import './style.css';

import searchlogo from '../../assets/icons/search.png';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {


const [search,setSearch] =  useState(false);

const submitSearch =(e)=>{
  e.preventDefault();
  alert('Searched');
}



const openSearch = ()=>{
  setSearch(true);
}


const searchClass= search ? 'searchinput active' : 'searchinput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post/1">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
         

        </ul>
        <div className="search">
          <form  onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Seacrh"></input >
            <img onClick={openSearch} className="searchicon" src={searchlogo} alt="search"></img>
          </form>
   
        </div>
    </div>
   )

 }

export default Navbar