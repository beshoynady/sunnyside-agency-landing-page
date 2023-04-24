import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img}/>
        <p>{props.comment}</p>
        <div className='name'>
            <h2>{props.name}</h2>
            <h4>{props.jop}</h4>
        </div>
    </div>
  )
}

export default Card