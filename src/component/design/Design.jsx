import React from 'react';
import './Design.css';


const Design = (props) => {
    const bg=props.image
    return (
        <div className='design' style={{backgroundImage:`url('${bg}')`}}>
            <div className='content'>
                <h1>{props.title}</h1>
                <p>{props.prag}</p>
            </div>
        </div>
    )
}

export default Design