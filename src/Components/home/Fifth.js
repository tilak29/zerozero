import { display } from "@mui/system";
import React from "react";
import fifth1 from '../../assets/images/fifth1.png';
import fifth2 from '../../assets/images/fifth2.png';
import fifth3 from '../../assets/images/fifth3.png';
import fifth4 from '../../assets/images/fifth4.png';
import fifthplay1 from '../../assets/images/fifthplay1.png';
import fifthplay2 from '../../assets/images/fifthplay2.png';
import fourthcircle from '../../assets/images/fourthcircle.png';
import f1 from '../../assets/images/f1.png';
import f2 from '../../assets/images/f2.png';
import f3 from '../../assets/images/f3.png';
import f4 from '../../assets/images/f4.png';
import flowerleft from '../../assets/images/flowerleft.png';
import flowerright from '../../assets/images/flowerright.png';
import { InstagramEmbed } from 'react-social-media-embed';




function Fifth(){
    return(<>
        <img style={{float:"left", width:"10vw", height:"28vh", marginTop:"-7%"}} src={flowerright} />
        <div className="fifth-sec">
            <div style={{display:"flex"}}>
            
            <p className="fifth-text1">Influencer Collabs</p>
            <img style={{height:"10%",maxWidth:"5%" ,marginLeft:"-5%",zIndex:"0"}} src={fourthcircle} alt="fourthcircle"/>
            </div>
            </div>
        
        <div style={{marginTop:"2%" ,marginLeft:"7%"}}>
        <div className="fifth-img-div">
        <InstagramEmbed className="fifth-ifrmae" url="https://www.instagram.com/reel/Cqfq9aopBlE/?utm_source=ig_web_copy_link/"/>
        <InstagramEmbed className="fifth-ifrmae" url="https://www.instagram.com/reel/CqfDbtYpQvL/?utm_source=ig_web_copy_link/"  />
        <InstagramEmbed className="fifth-ifrmae" url="https://www.instagram.com/reel/CqheCWvoKH_/?utm_source=ig_web_copy_link/" /> 
        </div>

        {/* <div style={{display:"flex",marginLeft:"3%"}}>
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
        </div>

        <div style={{display:"flex",marginLeft:"3%"}}>
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
        </div> */}
        </div>
      
       

    </>
)
}

export default Fifth;