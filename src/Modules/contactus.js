import React from "react";
import '../css/contactus.css';
import icon1 from "../assets/icons/icon1rr.png";
import mailicon from "../assets/icons/mailiconrr.png";
import callicon from "../assets/icons/calliconrr.png";
import locationicon from "../assets/icons/locationiconrr.png";
import fbicon from "../assets/icons/fbiconrr.png";
import instaicon from "../assets/icons/instaiconrr.png";
import wimg from '../assets/images/whatsapp.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contactus()
{
    return(
        <>
        <div className="contactus">
      
        <section className="leftsection">
          <div className="head1div"><b><h1 className="heading1">Contact us </h1><img className="icon1C" src={icon1} alt="pic1.png"/></b> </div>
          <p className="text">
          Get in touch and let us know how we can help. Have a question but aren’t sure who to contact? 
          Get in touch and a member of our team will reach out to you.
          </p><br/>

          <h1 className="heading1">Talk with us</h1> <br/>
          <div className="talkwithusdiv">
          <p className="text"><img className="mailicon" src={mailicon} alt="abc"/>&ensp;&ensp;care@smartlaboratories.co.in</p><br/>
          <p className="text"><img className="callicon" src={callicon} alt="abc"/>&ensp;&ensp;079-49136646</p><br/>
          <p className="text" style={{marginTop:"-8px"}}><WhatsAppIcon sx={{ml:"-5px",color:"grey"}}/>&ensp;&ensp;<sup style={{fontSize:"1rem"}}>9904336000</sup></p>
          </div><br/>

         <h1 className="heading1">Visit us</h1><br/>
         <div className="visitusdiv"><img className="locationicon" src={locationicon} alt="abc"/>
         <p className="adress">
         Smart Laboratories Pvt. Ltd. 1004, Brooklyn Tower, Nr. YMCA Club, S. G. Highway, Ahmedabad 380051 (Guj.) </p></div> <br/>
         
         <h1 className="heading1">Follow us</h1><br/>
         <div className="followusdiv">
        <div className="fb_insta">
          <img className="fbicon" src={fbicon} alt="abc"/> 
          <a style={{textDecoration:'none', color:"black"}} href=" https://www.facebook.com/zerozeroindia" alt="#"><p className="username"> zero zero india</p></a></div><br/>
        <div className="fb_insta"><img className="instaicon" src={instaicon} alt="abc"/>
        <a style={{textDecoration:'none', color:"black"}} href="https://www.instagram.com/zerozeroindia/" alt="#"><p className="username">@zerozeroindia</p></a></div>
        </div>
        </section>

        <section className="rightsection">
        <center>
        <form className="formcontactus">
            <input className="input1" type={"text"} placeholder="First Name" maxlength = "20"></input>&ensp;
            <input className="input1" type={"text"} placeholder="Last Name" maxlength = "20"></input><br/><br/>
            <input className="input1" type={"email"} placeholder="Email" maxlength = "30"></input>&ensp;
            <input className="input1" type={"text"} placeholder="Phone" maxlength = "10"></input><br/><br/>
            <input className="input2" type={"text"} placeholder="Subject" maxlength = "100"></input><br/><br/>
            <input className="input3" type={"text"} placeholder="Message" maxlength = "500"></input><br/><br/>
            <button className="btncontactus">SEND MESSAGE</button>
        </form>
        </center>
        </section>
        </div><br/><br/><br/><br/>


        <div>
        <center>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.171674948724!2d72.5006204!3d23.0038297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a96d499f0d5%3A0xc5c90c883df51745!2sSmart%20Laboratories%20Pvt.%20Ltd!5e0!3m2!1snl!2sae!4v1680527851240!5m2!1snl!2sae"></iframe>
        </center></div>

        <br/>
      
      </>
        
    )
}
export default Contactus;