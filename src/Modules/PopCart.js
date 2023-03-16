import React, { useEffect,useState } from 'react';
import '../css/PopCart.css';
import img from "../assets/images/productimg2.png";

const Cart = () => {  
    const [quantity, setQuantity] = useState(1);
    const [subTotal, setSubTotal] = useState(170);

    
    useEffect(() => {
        setSubTotal(170.00 * quantity);
    }, [quantity]);

    return (
        <div className="mainpop">
         
            <div className="mainpop-img">
                <img className="img" src={img} alt=""/>
            </div>

            <div className="mainpop-info">
                <div className="product-name">Zero Zero-hair removal cream</div><br/>
                <div className="line-2">Your order is eligible for FREE Delivery</div>
                <div className="line-3">Select this option at checkout.</div>
                <div><button className="line-4">Details</button></div>
                <div className="price">₹ {subTotal}</div>

                <div className='quantityy'>
                    <button className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><b>-</b></button>
                    <div className='amounts'>{quantity}</div>
                    <button className='ence' onClick={() => setQuantity(quantity + 1)}><span>+</span></button>
                </div>

                <a href='/cart'><button className="button-1">Go to cart</button></a>

            </div>
        </div>
    );
}

export default Cart;