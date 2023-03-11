import React, { useState } from 'react';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import '../../css/sectiona.css'
import delivery from '../../assets/icons/delivery-icon.png'
import enquiry from '../../assets/icons/enquiry-icon.png'
import wishlist from '../../assets/icons/wishilist-icon.png'


function Paaragraf() {
    const [quantity, setQuantity] = useState(1);



    return (

        <div className="box2">
            <p className='zero'> Zero Zero-hair removal cream </p><br/>
            <div className="rating">    <Stack ><Rating name="half-rating" /></Stack> 500 Reviews </div><br/><br/>
            <div className='line2'>Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem<br />
                Ipsum has been the industry's standard dummy  </div>
           <div className='mrp'> <p  style={{ fontSize: '20px',fontFamily: 'Prata',
            fontStyle: 'normal', color: '#282926' }}>

                MRP ₹170.00(₹1.70/ml) </p> <p className= 'taxeline'>(Inclusive of all taxes)</p>
            </div><hr />
            
            <br />
            <p className='highlight'> Highlights</p>
            <br />
            <ul className='lorem4line'>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>

                <li>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </li>

                <li>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

                <li>   Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

            </ul> <br /> 
            <sup className=" button">

            <img src={wishlist} alt='' height='15px'/>
                <sup className="addtowishlist"> Add to wishlist </sup>  &nbsp;&nbsp; &nbsp;&nbsp;
                <img src={delivery} alt='' height='15px'/>
                <sup className="return"> Delivery & Returns</sup> &nbsp;&nbsp; &nbsp;&nbsp;
                <img src={enquiry} alt='' height='14px'/>
                <sup className="mail "> Enquiry</sup>

            </sup> <br/>
            <div className='arr '>
                <div className='quantity'>
                    <div className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><span>-</span></div>
                    <div className='amount'>{quantity}</div>
                    <div className='enc' onClick={() => setQuantity(quantity + 1)}><span>+</span></div>

                </div>
                <a href='/cart'><button className='buttone'>Add to cart</button></a>
            </div>

        </div>





    );
}

export default Paaragraf;