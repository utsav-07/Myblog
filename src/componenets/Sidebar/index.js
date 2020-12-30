import React,{useState,useEffect} from 'react'
import Card from '../UI/Card';
import './style.css';

import mypic from '../../sideBarImage/utsav.png';


import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import SocailMedia from '../../socialMedia';

import  myWorkPost from '../../myWorkPost/workPost.json';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {




  const[posts, setPosts] = useState([]);


  useEffect(()=>{
  
      
      
      const posts = myWorkPost.data;
  
      setPosts(posts);
  }, [posts]);


  return(

    <div className="sidebarContainer" style={{width:props.width}}>
         <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box' }}>
             <div className="cardHeader">
                 <span>About Us</span>

                

             </div>


             <div className="profileImageContainer">
                    <img src={mypic} alt="my pic"></img>
                </div>

                <div className="cardBody">
                  <p className="personalBio">My name is utsav sinha. I am student of kiit university, Now I am doing b.tech from there in computer science

                  </p>
                </div>
             </Card>


             <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box' }} >
             <div className="cardHeader">
                 <span>Social Network</span>

                
                <SocailMedia style ={{dispaly: 'flex' ,  padding:'20px', fontSize: '50px'}}></SocailMedia>

                 
             </div>
             </Card>



             <Card style={{marginBottom: '20px',padding:'20px', boxSizing: 'border-box' }}>
             <div className="cardHeader">
                 <span>Recent Post</span>

                

             </div>

             <div className="recentPosts">
            


                 {
                      posts.map(post =>{
                        return(

                          //key = {post.id} resolve warnig by providing unique thing in navlink
                          <NavLink key={post.id} to={`/post/${post.id}`}>
                              <div className="recentPost">
                              <h3>{post.blogTitle}</h3>
                              <span>{post.postedOn}</span>
                            </div>
                          </NavLink>
                          
                        );
                      })
                 }


          
            

            


             </div>
             </Card>
    </div>
    
   )

 }

export default Sidebar