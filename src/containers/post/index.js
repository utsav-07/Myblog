import React from 'react'
import BlogPost from '../../componenets/BlogPost';
import Sidebar from '../../componenets/Sidebar';
import Card from '../../componenets/UI/Card';

import './style.css';

/**
* @author
* @function Post
**/

const Post = (props) => {

console.log(props);

  return(
    <section className="container">
      {/* class does not work there if card is used */}
        {/* <div className="blogPost">blogPost</div> */}
        
        <BlogPost {...props}></BlogPost>
        <Sidebar ></Sidebar>
    </section>

   )

 }

export default Post