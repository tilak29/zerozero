import React from "react";
import '../../css/link.css';
import zero from "../../assets/images/zero.png";
import mobilelogo from "../../assets/images/mobilelogo.png";
import maillogo from "../../assets/images/mail-logo.png";
import fblogo from "../../assets/images/fblogo.png";
import twlogo from "../../assets/images/tweeterlogo.png";
import pinlogo from "../../assets/images/pinlogo.png";
import instalogo from "../../assets/images/instalogo.png";
import divider from "../../assets/images/divider.png";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import wimg from '../../../src/assets/images/whatsapp.png'
import youtube from '../../assets/icons/youtube_black.png';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer1(){
    return( 

        
<div className="footer">
     <section className="section1">
     <Link to='/'><img className="piczero" src={zero} alt="abc"/></Link>
     <img className="mobilelogo" src={mobilelogo} alt="abc"/>
     <p className="mobnum">079-49136646</p>
        <div >
        <img className="maillogo" src={maillogo} alt="abc"/>
        <p className="mailid"> care@smartlaboratories.co.in
 </p>
        </div>
        <div >
        <img className="maillogos" src={wimg} alt="abc"/>
        <p className="mailids">9904336000
 
 </p>
        </div>
      <div className="sociallogo">
      <a className="linkfooter" href=" https://www.facebook.com/zerozeroindia"><img className="fblogo" src={fblogo} alt="abc"/></a>
      <a className="linkfooter" href="https://www.youtube.com/@ZeroZero-india"><YouTubeIcon sx={{ml:"3vw",mt:"-0.5vh"}}/></a>
    
      <a className="linkfooter" href="https://www.instagram.com/zerozeroindia/"><img className="instalogo" src={instalogo} alt="abc"/></a>
      </div>
     </section>

     <section className="section2">
     <h1 className="sec2head">Useful Links</h1><br></br>
     <p className="sec2compo">
        <a className="linkfooter"  href="/">Home </a><br></br><br></br>
        <a className="linkfooter"  href="/shop">Shop</a><br></br><br></br>
       <a className="linkfooter"   href="/aboutus"> About us</a> <br></br><br></br>
        <a className="linkfooter"  href="/blog">Blog </a><br></br><br></br>
      <a className="linkfooter"    href="/contactus">  Contact us </a>
     </p>
     </section>

     <section className="section3">
     <h1 className="sec3head">Customer Service</h1><br></br>
     <p className="sec3compo">
     <a className="linkfooter" href="#">Help & FAQs</a> <br></br><br></br>
     <a className="linkfooter" href="#">Returns Policy</a> <br></br><br></br>
     <a className="linkfooter" href="#">Terms & Conditions</a> <br></br><br></br>
     <a className="linkfooter" href="#">Privacy Policy</a> <br></br><br></br>
     <a className="linkfooter" href="#">Support Center</a>
     </p>
     </section>

     <section className="section4">
     <h1 className="sec4head">News Letter</h1><br></br>
     <form className="sec4form">
        <input className="sec4inputtext" type={Email}  placeholder="Email address"></input> <br/><br/>
        <button className="formbutton">Submit</button>
     </form>
     </section>
     
     
     <img className="divider" src={divider} alt="abc"/>


     <center><p className="footertext">© 2023 ZEROZERO. All Rights Reserved</p></center>

     



</div>

    )
};

export default Footer1;

