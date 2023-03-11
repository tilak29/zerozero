import React from "react";
import fourthcircle from '../../assets/images/fourthcircle.png';
import ReactPlayer from "react-player";
import fourthrect from '../../assets/images/fourthrect.png';
import fourthredcir from '../../assets/images/fourthredcir.png';
import fourthredline from '../../assets/images/fourthredline.png';


function Fourth(){
    return(
    <>
    
    <div className="fourth-sec">
       <div style={{display:"flex"}}>
            <p className="fourth-text">Digital Adds</p>
            <img style={{height:"2%", width:"2%" ,marginLeft:"-2%", zIndex:"0"}} src={fourthcircle} alt="fourthcircle"/>
            </div>
    </div>
  
    <div  style={{position:"relative", top:"43vh"}}>
        <div style={{display:"flex"}} >
            <div style={{position:"absolute", top:"1vh", left:"20%", height:"33vh", width:"8%",zIndex:"1"}}>
        <ReactPlayer className="react-player"
      width="380%"
      height="200%"
      controls={false}
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
      </div>
      <div style={{position:"absolute", top:"1vh", left:"53%", height:"33vh", width:"8%",zIndex:"1"}}>
      <ReactPlayer className="react-player"
      width="380%"
      height="200%"
      controls={false}
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
      </div>
        </div>
        <div style={{ marginLeft:"24%"}}>
        <img className="fourth-rect" src={fourthrect} alt="fourthrect" />
        <img className="fourth-rect" src={fourthrect} alt="fourthrect" />
      </div>
        </div>

       
     
      <div style={{ display:"flex",position:"relative",top:"50vh", left:"48%"}}>
      <a href="#" className="link" >
        
        <p className="fourth-lasttext">View All</p>
        <img style={{height:"2%",width:"4%",marginLeft:"7px", marginTop:"5px"}} src={fourthredline} alt="fourthredline"/>
        <img style={{width:"3%", marginTop:"-8px",marginLeft:"-11px"}} src={fourthredcir} alt="fourthredcir"/>
      </a>
      </div>

      
    </>
    )
}

export default Fourth;