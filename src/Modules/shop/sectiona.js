import React, { useEffect, useState } from "react";
import "../../css/sectiona.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import enquiry from "../../assets/images/enquiry-icon.png";
import delivery from "../../assets/images/delivery-icon.png";
import wishlist from "../../assets/images/wishilist-icon.png";

import "react-simple-carousel-image-slider/dist/index.css";

import Slider from "./slider";
import { Pane } from "evergreen-ui";
import img from "../../assets/images/p1.png";





function SectionA() {
  const [buttonValue, setButtonValue] = useState(localStorage.getItem("buttonValue") || "1");
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(170);

  const handleClick1 = () => {
    if (buttonValue === "" || buttonValue === "2") {
      setButtonValue("1");}
    // } else if (buttonValue === "1") {
    //   setButtonValue("");
    // }
  };

  const handleClick2 = () => {
    if (buttonValue === "" || buttonValue === "1") {
      setButtonValue("2");}
    // } else if (buttonValue === "2") {
    //   setButtonValue("");
    // }
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      weight: 50,
      pricePerGram: 2,
      inclusiveOfTaxes: true,
    },
    {
      id: 2,
      name: "Product 2",
      price: 60,
      weight: 25,
      pricePerGram: 2.4,
      inclusiveOfTaxes: true,
    },
  ];

  const product = products.find((p) => p.id === parseInt(buttonValue));
  const [isShownPop, setIsShownPop] = React.useState(false);


  return (
    <>
      <div className="containerabc">
        <div className="slider-box1">
          <Slider />
        </div>

        <div className="zero-box2">


          <h1 className="zerozero-title"> Zero Zero-hair removal cream</h1>
          <div className="ratting">
            <Stack spacing={3}>
              <Rating value={4.3} />
            </Stack>
            <p className="reviews500"> 4 Reviews</p>
          </div>
          <div className="ratting-below-line">
            Zero Zero is a quick, easy, and painless way to remove body hair
            anytime anywhere. Enriched with the goodness of Aloe Vera, this
            effective hair removal technique removes the thickest of hair and
            leaves your skin soft and smooth for days. The formulation consists
            of glycerin along with sparkles that make your skin glow like gold.
            Zero Zero gives out a lemon fragrance which leaves no room for
            pungent smell. Our product is made by using natural ingredients and
            is gentle on the skin, ensuring that you can achieve silky smooth
            legs, arms, and underarms without any irritation or discomfort.
          </div>
          <br />
          <hr />
          <br />
          <p className="highlight"> Highlights</p> <br /> <br />
          <ul className="highlight-lorem4line">
            <li>Your 5 Minute Salon.</li>

            <li>Refreshing Aroma.</li>

            <li>Removes Shortest of Hair Growth.</li>

            <li>Dermatologically tested.</li>

            <li>Quick & Easy to Use.</li>
          </ul>{" "}
          <br />
          <sup className="icons">
            <div className="icon">
              <img src={wishlist} height="20px" background="#363636" alt="" />
              <sup className="addtowishlist "> Add To Wishlist </sup>
            </div>

            <div className="icon">
              <img src={delivery} height="20px" background="#363636" alt="" />
              <sup className="delivery-return "> Delivery & Returns</sup>
            </div>

            <div className="icon">
              <img src={enquiry} height="20px" background="#363636" alt="" />
              <sup className="enquiry "> Enquiry</sup>
            </div>
          </sup>
         
          <button className="btnofprice" onClick={handleClick1}>50 gms(₹2.00/g)</button>
          <button  className="btnofprice" onClick={handleClick2}>25 gms (₹2.40/g) </button>
    
          {product && (
            <div style={{paddingTop:"3%"}}>
              <p className="highlight">
                MRP ₹{product.price.toFixed(2)} (
                ₹{product.pricePerGram.toFixed(2)}/g){" "}
                {product.inclusiveOfTaxes ? <sub>(Inclusive of all taxes)</sub> : ""}
              </p>
            </div>
          )}
          
          <div className="counter-buttone">
            <div className="quantity">
              <div
                className="desc"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <span></span>
              </div>
              <div className="amount">{quantity}</div>
              <div className="enc" onClick={() => setQuantity(quantity + 1)}>
                +
              </div>
            </div>
            <button className="buttone"> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="About">
        <b className="aboutprodct-title">About this product</b>
        <br /> <br />
        <ul className="aboutproduct-paragraph">
          <li>
            YOUR 5-MINUTE SALON : Get satin like skin and glow in just 6-8
            minutes.
          </li>

          <li>
            FRESH SMELL : The lemon fragrance leaves no room for pungent smell.
          </li>
          <li>
            REMOVES SHORTEST OF HAIR : Effectively removes hair from arms, legs,
            underarms, & bikini line.
          </li>
          <li>
            DERMATOLOGICALLY TESTED : It is completely safe to use it on skin.
          </li>

          <li>
            EASY TO USE : The pack contains a spatula which makes it really easy
            to use.
          </li>
        </ul>
      </div>

      {/************** PopUpCart *************/}

      {isShownPop ? (
        <Pane>
          <div
            isShown={isShownPop}
            title="No footer"
            hasHeader={false}
            hasFooter={false}
          >
            {" "}
            <div className="cart">
              <div className="top">
                <h2 className="Head">Your Cart</h2>
                <div className="close" onClick={() => setIsShownPop(false)}>
                  X
                </div>
              </div>
              <div className="product">
                <img src={img} alt="Not Found" />
                <div className="price">
                  <span>&nbsp;Zero Zero-hair removal &nbsp;cream</span>
                  <span>&nbsp;Rs. 170.00</span>
                </div>
                <div className="quantity">
                  <div
                    className="desc"
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                  >
                    <span></span>
                  </div>
                  <div className="amount">{quantity}</div>
                  <div
                    className="enc"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="subtotal">
                <section>
                  <span>SUBTOTAL</span>
                  <span>RS. {subTotal}.00</span>
                </section>
                <p>Shipping & taxes calculated at checkout</p>
              </div>
              <button className="checkout">
                <a href="/Checkout" className="alink">
                  Proceed To Checkout
                </a>
              </button>
              <button className="checkout">
                <a href="/cart" className="alink">
                  View Cart
                </a>
              </button>
            </div>
          </div>
        </Pane>
      ) : (
        ""
      )}

      {/*//////////////PopUpCart //////////////*/}
    </>
  );
}

export default SectionA;