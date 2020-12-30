import React from 'react'
import SocailMedia from '../../socialMedia';
import Card from '../UI/Card'

import './style.css';

import { FaMapMarkerAlt ,FaBlenderPhone,FaMailBulk } from 'react-icons/fa';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="footerStart">
        <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box' ,backgroundColor: '#d1c7c7' }}>
            <section className="footermid">

                <div className="address">

                    <ul>
                        <li>
                        <a className="location" href =""> <FaMapMarkerAlt></FaMapMarkerAlt>New Etwarpur Dhali Road Sipara Patna Bihar-804453</a>
                        </li>
                        
                        <br></br>
                        <li>
                        <a className="phone" href =""> <FaBlenderPhone></FaBlenderPhone> +91-6200858422</a>
                        </li>

                        <br></br>
                        <li>
                              <a className="phone" href =""><FaMailBulk></FaMailBulk>  utsavudit07@gmail.com</a>
                        </li>
                    </ul>

                    


                 

                  
                
                </div>


                

                {/* <div class="vl"></div> */}
                

                <div className="socialMedia">

                <SocailMedia style={{marginBottom: '20px', padding:'20px',fontSize: '40px' }}></SocailMedia>

                </div>

            </section>
        </Card>

        </div>
   )

 }

export default Footer