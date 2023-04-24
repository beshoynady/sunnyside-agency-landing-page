import React from 'react'
import bottle from '../../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../images/desktop/image-gallery-orange.jpg';
import cone from '../../images/desktop/image-gallery-cone.jpg';
import sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg';
import './Gallery.css';

const images=[bottle, orange, cone, sugarcubes]
const Gallery = () => {
  return (
    <div className='gallery'>
        {images.map((m,i)=>{
            return(
                <div className='image'>
                    <img key={i} src={m} />
                </div>
            )
        })}
    </div>
  )
}

export default Gallery