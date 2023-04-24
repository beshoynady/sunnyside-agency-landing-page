import React from 'react';
import './Imgbox.css';


const Imgbox = (props) => {
  return (
    <div className='imgbox'>
        <img src={props.image} />
    </div>
  )
}

export default Imgbox