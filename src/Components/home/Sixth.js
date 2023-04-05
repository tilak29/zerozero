import React, { useState } from "react";

import icons from "../../constants/icons";

import Carousel from "react-multi-carousel";

import images from "../../constants/images";
import sixth1 from "../../assets/images/sixth1.png";
import sixth2 from "../../assets/images/sixth2.png";
import sixth3 from "../../assets/images/sixth3.png";
import arrowleft from "../../assets/images/arrowleft.png";
import arrowright from "../../assets/images/arrowright.png";
import flowerleft from "../../assets/images/flowerleft.png";
import colon from "../../assets/images/colon.png";
import sixthredcir from "../../assets/images/sixthredcir.png";
import sixthredline from "../../assets/images/sixthredline.png";
import sixthline from "../../assets/images/sixthline.png";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";

import "react-multi-carousel/lib/styles.css";
import fourthcircle from "../../assets/images/fourthcircle.png";

import "../../css/Home.css";
import "../../css/HomeRespo.css";
import { useCarousel } from "use-carousel-hook";

function Card(props) {
  return (
    <div class="slide-card-bdr">
      <div class="slide-card-all">
        <img class="slide-card-img" src={props.image}/>
        <img class="slide-card-colon" src={colon} />
        <p class="slide-card-name">{props.name}</p>
        <p class="slide-card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}

const Sixth = () => {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div className="avaible2">
      <div style={{ display: "flex", marginLeft: "40%" }}>
        <p className="fourth-text">Testimonials</p>
        <img
          style={{
            height: "4%",
            maxWidth: "5%",
            marginLeft: "-2%",
            zIndex: "0",
          }}
          src={fourthcircle}
          alt="fourthcircle"
        />
      </div>
      <div>
        <div style={{ display: "flex", marginTop: "2%" }}>
          <ul ref={ref} className="slide-list1">
            <li class="slide-list-item">
              <Card image={""} name="Varalika Shah" 
              text="Using this hair removal cream for 3 months now, I must say it is amazing. Removes hair easily and without any pain." />
            </li>
            <li class="slide-list-item">
              <Card image={""} name="Gurleen Bagga" 
              text="I have not stepped in a salon since I started using Zero Zero. I love how easy it is to use." />
            </li>
            <li class="slide-list-item">
              <Card image={""} name="Roshni Mehta" 
              text="Zero Zero has completely changed my life. I used to wait to get an appointment and that used to waste a lot of time. Since I started using this product, I love how easy it is to use. " />
            </li>
            <li class="slide-list-item">
              <Card image={""} name="Priyanka Thakor" 
              text="Zero Zero is really easy to use and I highly recommend it to all the college girls. Really satisfied with the results." />
            </li>
            <li class="slide-list-item">
              <Card image={""} name="Drishti Shah" 
              text="Getting your hair removed in just 6-7 minutes without any skin damage is just amazing. This hair removal cream has given the best results, even more than I expected." />
            </li>
            <li class="slide-list-item">
              <Card image={""} name="Swati Rastogi" 
              text="I recently started using this hair removal cream and the thing I love the most is its smell. Other creams usually smell really strong and pungent but zero zero gives out a really amazing lemony smell." />
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "5%", marginLeft: "42%", marginBottom: "2%" }}>
          <button
            type="submit"
            style={{ background: "none", border: "none" }}
            onClick={() => previous()}
          >
            <img style={{ cursor: "pointer" }} src={sixthline} type="submit" />
          </button>
          <button
            type="submit"
            style={{ background: "none", border: "none" }}
            onClick={() => next()}
          >
            <img
              className="sixthline"
              style={{ marginLeft: "8%", cursor: "pointer" }}
              src={sixthredline}
              alt="fourthredline"
            />
            <img
              className="sixthcircle"
              style={{
                marginTop: "-20%",
                marginLeft: "-19%",
                cursor: "pointer",
                marginBottom: "-15%",
              }}
              src={sixthredcir}
              alt="fourthredcir"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
