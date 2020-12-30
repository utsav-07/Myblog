import React, {useState,useEffect} from 'react'
import Card from '../../../componenets/UI/Card';

import './style.css';

import blogPost from '../../../data/blog.json';

import workPost from '../../../myWorkPost/workPost.json';
// import android from '../.../blogPostImages/android.png';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  
  
  const[posts, setPosts] = useState([]);


  useEffect(()=>{
  
      
      
      const posts = workPost.data;
  
      setPosts(posts);
  }, [posts]);


  return(
    <div style = {props.style}> 

    <Card  style={{marginBottom: '20px'}}>
    
        <div className="postImageWrapper">


            

        {
                      posts.map(post =>{
                        return(

                          //key = {post.id} resolve warnig by providing unique thing in navlink
                        
                              <div className="recentPost">
                              <img src= {process.env.PUBLIC_URL + '/myWorkImages/' + post.blogImage}></img>
                            </div>
                        
                          
                        );
                      })
                 }

            {/* <img src={android}></img> */}

            {/* <img src={process.env.PUBLIC_URL + '/blogPostImages/android.png'} alt="Post Image"></img> */}
        </div>


    </Card>


    </div>
   )

 }

export default RecentPosts