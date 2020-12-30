import React from 'react'
import './style.css';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    // passing syyle property here from where card is used
    // props.style = {...props}
    <div className="card" style={props.style}>
        {props.children}
    </div>
   )

 }

export default Card