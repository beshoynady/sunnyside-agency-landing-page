import React from 'react'
import './Infobox.css';

const Infobox = (props) => {
    return (
        <div className='infobox'>
            <div className='infobox-content'>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
            <a>LEARN MORE</a>
            </div>
        </div>

    )
}

export default Infobox