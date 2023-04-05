import React from "react";
import pic1 from "../assets/images/Aboutusmain.jpg";
import '../css/aboutus.css';
import photo2 from "../assets/images/Aboutussecond.jpg";
import logo1 from "../assets/icons/AboutusStep1.png";
import logo2 from "../assets/icons/AboutusStep2.png";
import logo3 from "../assets/icons/AboutusStep3.png";
import logo4 from "../assets/icons/AboutusStep4.png";
import aboutusvideo from "../assets/videos/aboutusvideo.mp4";






function Page() {
    return (
        <>
            <div className="aboutus">
                <center><img className="picture1" src={pic1} alt="pic1.png"></img></center>
                <br></br>
                <center className="tp">
                    <h3 className="abouthead">Zero Hair, Zero Fikar </h3>
                    <p className="text0">
                        Zero Zero is a brand that truly believes that women should feel confident and comfortable in their skin. As physical appearance has
                         always opened up a can of insecurities, our mission is to empower and encourage women to embrace themselves. <br></br>
                    </p><br />
                </center>

                <center className="tp">
                    <p className="text1">
                    We believe that every individual is different and hence, should feel comfortable making choices about their body that align
                     with their own values. There is no one-size-fits-all solution when it comes to body hair.<br></br>
                    </p><br />
                </center>

                <center className="tp">
                    <p className="text2">
                    At Zero Zero, we are committed to make women feel secure and give them the power to seize every opportunity. 
                    Our hair removal cream is one such enabler that goes beyond its standard usage. It enables women to step out with zeal and 
                    groove like no one’s watching. It is a solution to the daily body hair hassle, which requires no extra time, no salon appointments
                    , and mainly, no pain.<br></br>
                    </p>
                </center>
            </div>

            <div className="photo2div">
                <img className="photo2" src={photo2} alt="pic2.png"></img>
                <p className="textpic2">For Us It’s The Headstrong Women Who Go Out Of Their Way And<br/> Conquer The World, Be It With Hair Or Without Hair!
                </p>
            </div>


            <div className="logodiv_aboutus">
                <section className="logo1">
                    <img className="logo1" src={logo1} alt="pic1.png"></img>
                    <p className="logo1text" >Removes Hair In 6-8 Minutes  </p>
                </section>
                <section className="logo2">
                    <img className="logo2" src={logo2} alt="pic1.png"></img>
                    <p className="logo2text" >Completely Pain-Free</p>
                </section>
                <section className="logo3">
                    <img className="logo3" src={logo3} alt="pic1.png"></img>
                    <p className="logo3text">Pleasing Lemon Aroma</p>
                </section>
                <section className="logo4">
                    <img className="logo4" src={logo4} alt="pic1.png"></img>
                    <p className="logo4text">Dermatologically Tested</p>

                </section>
            </div>


            <div className="photo3">
                <center> 
                    <video className="photo3"  alt="Unsupported Video" autoPlay>
                    <source src={aboutusvideo} type='video/mp4'/>
  
                    </video></center>
            </div>






        </>
    );
}

export default Page;
