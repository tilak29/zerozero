import React from "react";

import second from '../../assets/images/second.png';
import wave from '../../assets/images/wavy.png';
import a from '../../assets/images/a.png';
import b from '../../assets/images/b.png';
import c from '../../assets/images/c.png';
import d from '../../assets/images/d.png';
import line from '../../assets/images/line.png';
import circle from '../../assets/images/circle.png';
import r1 from '../../assets/images/r1.png';
import r2 from '../../assets/images/r2.png';
import r3 from '../../assets/images/r3.png';
import r4 from '../../assets/images/r4.png';
import r5 from '../../assets/images/r5.png';
import { flexbox } from "@mui/system";
import { Button } from "@mui/material";
// import svgs from '../../assets/images/svgs.png';

function Second(){
    return(
    <>
    
    <div className="sec-sect">
 
<div className="sec-texts">
    <div style={{marginBottom:"1vh"}}>
<p className="sec-1text">About us</p>
    </div>
    <div style={{ marginBottom:"1vh"}}>
<p className="sec-2text">omnis iste natus error sil Voluptatem
    accusantium</p>
    </div>
    <div>
    <p className="sec-3text">
    omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab
    </p>
    </div>
    <div className="sec-icons-div">
    <img className="sec-icon" src={a} alt='a'/>
    <img className="sec-icon" src={b} alt='b'/>
    <img className="sec-icon" src={c} alt='c'/>
    <img className="sec-icon" src={d} alt='d'/>
    </div>
    <a href="/aboutus"><div className="get-to-know">
    <p className="get-to-know-text">Get to know us more</p>
   
    <div className="arrow-know">
    <img style={{maxHeight:"1vh", maxWidth:"58%"}} src={line} alt='line'/>
    <img style={{maxHeight:"7%", maxWidth:"15%", marginTop:"-6%", marginLeft:"-7%"}}  src={circle} alt='circle'/>
    </div>
    </div></a>
    </div>


<img className="sec-img" src={second} alt="first"/>

    
    <div className="sec-last-img-div" style={{position:"absolute", top:"77%", left:"8%", marginTop:"1%"}}>
        <img className="sec-last-img" src={r1} alt="r1"/>
        <img className="sec-last-img" src={r2} alt="r2"/>
        <img className="sec-last-img" src={r3} alt="r3"/>
        <img className="sec-last-img" src={r4} alt="r4"/>
    </div>
    <div style={{position:"absolute", top:"78%", left:"8.6%" , zIndex:"-1"}}>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
    </div>

</div>
    
    </>
    )
}

export default Second;





{/* <div class="custom-shape-divider-top-1676872022">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
