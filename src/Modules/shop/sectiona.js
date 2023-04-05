import React, { useEffect, useRef, useState } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const [mlIndex, setMlIndex] = useState(0);
  const [sizes, setSizes] = useState(null);
  const [subTotal, setSubTotal] = useState(170);
  const [activeImageIndex, setActiveImageIndex] = useState("");

  useEffect(() => {
    setSubTotal(170 * quantity);

    setSizes([{ size: "50 gms(₹2.00/g)" }, { size: "25 gms (₹2.40/g)" }]);
  }, [quantity]);
  const handleIconClick = (index) => {
    setActiveImageIndex(index);
  };

  const [isShownPop, setIsShownPop] = React.useState(false);


  return (
    <>
      <div className="containerabc">
        <div className="slider-box1">
         
        <Slider/>
        </div>

        <div className="zero-box2">
          <h1 className="zerozero-title"> Zero Zero-hair removal cream</h1>
          <div className="ratting">
            <Stack spacing={3}>
              <Rating value={4.3} />
            </Stack>
            <p className="reviews500">500 Reviews</p>
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
            <li>Your 5 Minute Salon</li>

            <li>Refreshing Aroma</li>

            <li>Removes Shortest of Hair Growth</li>

            <li>Dermatologically tested</li>
            <li>Quick & Easy to Use</li>
          </ul>{" "}
          <br />
          <sup className="icons">
            <img src={wishlist} height="20px" background="#363636" alt="" />
            <sup className="addtowishlist"> Add To Wishlist </sup>
            <img src={delivery} height="20px" background="#363636" alt="" />
            <sup className="delivery-return"> Delivery & Returns</sup>
            <img src={enquiry} height="20px" background="#363636" alt="" />
            <sup className="enquiry "> Enquiry</sup>
          </sup>
          <div className="size">
            {/*<h3>Unit</h3>*/}
            {/*<span id='ml'>{sizes ? sizes[mlIndex].size : 0}</span>*/}
            {sizes && (
              <div className="sizes">
                {sizes.map((item, index) => (
                  <span
                    className={mlIndex === index ? "ml active" : "ml"}
                    onClick={() => setMlIndex(index)}
                  >
                    {item.size}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="MRP-all-taxes">
            <div className="MRP">
              <h3>MRP &nbsp;{"₹" + 100 * (mlIndex + 1) + ".00"}</h3>{" "}
              <h3 id="real-price">
                ({"₹" + 2 * (mlIndex + 1) + ".00" + "/g"})
              </h3>
            </div>

            <p className="all-taxes">(Inclusive of all taxes)</p>
          </div>
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
            <button className="buttone">
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="About">
        <b className="aboutprodct-title">About this product</b>
        <br/>      <br/>
        <ul className="aboutproduct-paragraph">
          <li>
          YOUR 5-MINUTE SALON:  Get satin like skin and glow in just 6-8
            minutes
          </li> 
          
          <li>
          FRESHEST SMELL: The lemon fragrance leaves no room for pungent smell
          </li>
          <li>
          REMOVES SHORTEST OF HAIR: Effectively removes hair from arms, legs,
            underarms, & bikini line
          </li>
          <li>
          DERMATOLOGICALLY TESTED:It is completely safe to use it on skins
          </li>

          <li>
          EASY TO USE: The pack contains a spatula which makes it really easy
            to use
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
