import React from 'react'


import { FaGithub ,FaGoogle, FaFacebook , FaInstagramSquare} from 'react-icons/fa';


import './style.css';
/**
* @author
* @function SocailMedia
**/

const SocailMedia = (props) => {
  return(
    <div className="head">

      <div className="social-container"  > 


   

      <a   {...props} href ="https://www.facebook.com/profile.php?id=100008326033945"
        className = "facebook social">
            <FaFacebook/>
        </a>

     

       <a    {...props} href ="" className = "instagram social"><FaInstagramSquare/></a> 


       <a    {...props} href ="" className = "gmail social"><FaGoogle/></a> 

       <a    {...props} href ="" className = "github social"><FaGithub/></a> 

      </div>
        
    </div>
   )

 }

export default SocailMedia