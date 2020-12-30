import React from 'react';
import Sidebar from '../../componenets/Sidebar';
import Card from '../../componenets/UI/Card';
import android from '../../blogPostImages/c++.png';
import './style.css';
import RecentPosts from './RecentPosts/index.js';


import blogData from '../../data/blog.json';
const SideImage = props => {
    return (

        <div style={{ height: `${props.height}px` }}>
            <img src={props.src}></img>
        </div>


    );
}


const ImageGallery = props => (
    <div className="gallaryPost" style={props.gallaryStyle}>


        <div className="centerImage">
        <section style={{ Width: '81%' }}>
            <div className ="mainImageWrapper">
                <img src={process.env.PUBLIC_URL + '/blogPostImages/' + props.imagesArray[0]}></img>
            </div>
        </section>

        </div>

        <section className="sideImageWrapper" style={{ width: '30%' }}>

            <SideImage
                height={props.sideImageHeight}
                src={process.env.PUBLIC_URL + '/blogPostImages/' + props.imagesArray[1]}>

            </SideImage>


            <SideImage
                height={props.sideImageHeight}
                src={process.env.PUBLIC_URL + '/blogPostImages/' + props.imagesArray[2]}>

            </SideImage>


            <SideImage
                height={props.sideImageHeight}
                src={process.env.PUBLIC_URL + '/blogPostImages/' + props.imagesArray[3]}>

            </SideImage>




        </section>

    </div>

);

const Home = props => {

    

    const gallaryHeight = 450;


    const gallaryStyle = {
        height: gallaryHeight + 'px',

        overflow: 'hidden'
    }


    const sideImageHeight = gallaryHeight / 3;


    const ImgAr = blogData.data.map(post => post.blogImage);

  

    return (
        <div>
            <Card >

                <ImageGallery
                    largrWidth='70%'
                    smallWidth='30%'
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}

                    imagesArray={
                        ImgAr
                    }

                //images = {[]}
                ></ImageGallery>


            </Card>

            <section className="HomeContainer">


                <RecentPosts style={{ width: '70%' }}></RecentPosts>


                <Sidebar></Sidebar>
            </section>


        </div>
    );
}

export default Home;