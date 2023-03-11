import React from 'react';

import icons from '../../constants/icons';

import Carousel from 'react-multi-carousel';

import images from '../../constants/images';

import 'react-multi-carousel/lib/styles.css';

import sixthredcir from '../../assets/images/sixthredcir.png';
import sixthredline from '../../assets/images/sixthredline.png';
import sixthline from '../../assets/images/sixthline.png';
import '../../css/Home.css'
import '../../css/HomeRespo.css'


const Avaible = () => {

    const data = [
        {
            image: icons.grofers,
            link: '/',
        },
        {
            image: icons.amazon,
            link: '/',
        },
        {
            image: icons.metro,
            link: '/',
        },
        {
            image: icons.bigbasket,
            link: '/',
        },
        {
            image: icons.flipkart,
            link: '/',
        },
        {
            image: icons.ratnadeep,
            link: '/',
        },
        {
            image: icons.foodhall,
            link: '/',
        },
        {
            image: icons.paytmmall,
            link: '/',
        },
        {
            image: icons.swiggyinstamart,
            link: '/',
        },
        {
            image: icons.whsmith,
            link: '/',
        },
    ]

    const imgs = [];

    for (let i = 0; i < 8; i++) {
        imgs.push({ image: images['instagram' + (i + 1)] })
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (<div className='avaible'>
        <h2>We are available on</h2>
        <section>
        <Carousel
                responsive={responsive}
                arrows={false}
                autoPlay={false}
                infinite
                autoPlaySpeed={600}
            >
                {
                    data.map(item => (
                        <a href={item.link} target='_blank'>
                            <img src={item.image} alt="#"/>
                        </a>
                    ))
                }
            </Carousel>
            
        </section>
        <a href='#' style={{ display:"flex",marginTop:"2%", paddingBottom:"25px"}}>
        <img style={{width:"40px",height:"7px"}} src={sixthline} alt="fourthredcir"/>
        <img style={{width:"40px",height:"7px",marginLeft:"20px"}} src={sixthredline} alt="fourthredline"/>
        <img style={{width:"30px", marginTop:"-12px",marginLeft:"-15px"}} src={sixthredcir} alt="fourthredcir"/>
      </a>
    </div>);
}

export default Avaible;