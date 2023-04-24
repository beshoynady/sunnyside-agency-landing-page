import React from 'react'
import Infobox from '../infobox/Infobox'
import Imgbox from '../imgbox/Imgbox'
import egg from '../../images/desktop/image-transform.jpg';
import cup from '../../images/desktop/image-stand-out.jpg';
import './Boxs.css';
import Design from '../design/Design';
import orange from '../../images/desktop/image-photography.jpg';
import apple from '../../images/desktop/image-graphic-design.jpg';
const Boxs = () => {
  return (
    <div className='boxs'>
      <div className='rowinfo rowrev'>
      <Infobox title="Transform your brand" info="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." />
        <Imgbox image={egg}/>
      </div>
      <div className='rowinfo'>
      <Imgbox image={cup}/>
        <Infobox title="Stand out to the right audience" info="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."/>
      </div>
        
      <Design image={apple} title='Graphic design' prag='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'/>
      <Design image={orange} title='Photography' prag='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'/>
    </div>
  )
}

export default Boxs