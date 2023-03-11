import React from "react";
import fifth1 from '../../assets/images/fifth1.png';
import fifth2 from '../../assets/images/fifth2.png';
import fifth3 from '../../assets/images/fifth3.png';
import fifth4 from '../../assets/images/fifth4.png';
import fifthplay1 from '../../assets/images/fifthplay1.png';
import fifthplay2 from '../../assets/images/fifthplay2.png';
import fourthcircle from '../../assets/images/fourthcircle.png';


function Fifth(){
    return(<>
        <div className="fifth-sec">
            <p className="fifth-text1">Influencer Collabs</p>
            <img style={{height:"35px", width:"35px",marginTop:"5px" ,marginLeft:"260px", zIndex:"-1"}} src={fourthcircle} alt="fourthcircle"/>
            </div>
        
        <div  style={{position:"relative" ,top:"65vh", left:"11%"}}>
        <div style={{display:"flex"}}>
        <img className="fifth-img" src={fifth1} alt="fifth1" />
        <img className="fifth-img" src={fifth2} alt="fifth2" />
        <img className="fifth-img" src={fifth3} alt="fifth3" />
        <img className="fifth-img" src={fifth4} alt="fifth4" />
        </div>

        <div style={{display:"flex",position:"relative"}}>
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
        </div>

        <div style={{display:"flex",position:"relative"}}>
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
        </div>
        </div>
      
        

    </>
)
}

export default Fifth;