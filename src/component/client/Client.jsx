import React from 'react';
import Emily from '../../images/image-emily.jpg';
import Jennie from '../../images/image-jennie.jpg';
import Thomas from '../../images/image-thomas.jpg';
import Card from '../card/Card';
import './Client.css';
const clint =[
    {
        img: Emily ,
        com:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        name:'Emily R.',
        jop:'Marketing Director'
    },
    {
        img: Thomas ,
        com:'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        name:'Thomas S.',
        jop:'Chief Operating Officer '
    },
    {
        img: Jennie ,
        com:'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        name:'Jennie F.',
        jop:'Business Owner'
    }
]

const Client = () => {
    return (
        <div className='client'>
            <h1>CLIENT TESTIMONIALS</h1>
            <div className='cards'>
                {clint.map((c)=>{
                    return(
                        <Card img={c.img} comment={c.com} name={c.name} jop={c.jop}/>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Client