import React, {useState,useEffect}from 'react'
import Card from '../UI/Card';
import './style.css';



import blogPost from '../../data/blog.json';

    
import  myWorkPost from '../../myWorkPost/workPost.json';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

//console.log(props);
const[post, setPost] = useState({

            id:"",
            blogCategory:"",
            blogTitle:"",
            postedOn:"",
            author:"",
            blogImage:"",
            blogText:""


});

const[postid,setPostid] = useState('');

useEffect(()=>{

    
    const postid = props.match.params.postid;
  // console.log(data);
    const post = myWorkPost.data.find(post => post.id == postid);

    setPost(post);
    setPostid(postid);
}, [post, props.match.params.postid]);


if(post.blogImage == "") return null;

  return(
    //   sending the style as a paremnter in card which takes with props
    // <Card style={{width:'70%'}}>
        
    //     </Card>
<div className="blogPostContainer">
    <Card>
        <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                     <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>

                    <span className="gitHub"> <a href =  {post.gitHubLink}> Source Code: {post.gitHubLink} </a></span>
        </div>
        

        <div className="postImageContainer">
            <img src={process.env.PUBLIC_URL + '/myWorkImages/' + post.blogImage} alt="Post Image"></img>
        </div>

        <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
        </div>
    </Card>

</div>

   )

 }

export default BlogPost