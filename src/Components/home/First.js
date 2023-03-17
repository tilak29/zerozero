import React from "react";
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import ww2 from '../../assets/images/ww2.png';


function First(){
    return(
    <>
   <div className="fir-sect">
    <img className="fir-img" src={first} alt="first"/>
</div>
<div>
<img className="waveimg" src={ww2}/>

</div>
    </>
    )
}

export default First;



