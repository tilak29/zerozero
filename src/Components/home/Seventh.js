import React from "react";
import fourthcircle from '../../assets/images/fourthcircle.png';
import seventh1 from '../../assets/images/seventh1.png';
import seventh2 from '../../assets/images/seventh2.png';
import seventh3 from '../../assets/images/seventh3.png';
import seventhrect from '../../assets/images/seventhrect.png';
import seventhrect2 from '../../assets/images/seventhrect2.png';
import sixthredcir from '../../assets/images/sixthredcir.png';
import sixthredline from '../../assets/images/sixthredline.png';
import sixthline from '../../assets/images/sixthline.png';

function Card(props){
    return ( 
    <div>
    <div className="seventh-card-all">
    <img class="seventh-card-img1" src={props.image1} alt="abc"/>
    <img className="seventh-card-img2" src={props.image2} alt="abc2"/>
    <img className="seventh-card-img3" src={props.image3} alt="abc3"/>
    <p class="seventh-card-text1">Lorem Ipsum is simply{props.text1}</p>
    <p class="seventh-card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry{props.text2}</p>
    </div>
    </div>
    );
}


function Seventh(){
    return(
        <>
        <div className="seventh-sec">
            <div style={{display:"flex"}}>
           <p className="seventh-text1">Blog</p>
           <img style={{height:"35px", width:"35px",marginTop:"11px" ,marginLeft:"-27px", zIndex:"-1"}} src={fourthcircle} alt="fourthcircle"/>
           </div>
        </div>

        <div style={{display:"flex", position:"relative", top:"80vh",marginLeft:"11%", marginTop:"2%"}}>
            <Card
            image1={seventh1}
            image2={seventhrect}
            image3={seventhrect2}
            text1=""
            text2="" />
            <Card
            image1={seventh2}
            image2={seventhrect}
            image3={seventhrect2}
            text1=""
            text2="" />
            <Card
            image1={seventh3}
            image2={seventhrect}
            image3={seventhrect2}
            text1=""
            text2="" />
        </div>

        <a href="#" style={{ display:"flex",position:"relative", top:"83vh",left:"49%",marginBottom:"10%"}}>
        <img style={{width:"40px",height:"7px"}} src={sixthline} alt="fourthredcir"/>
        <img style={{width:"40px",height:"7px",marginLeft:"20px"}} src={sixthredline} alt="fourthredline"/>
        <img style={{width:"30px", marginTop:"-12px",marginLeft:"-15px"}} src={sixthredcir} alt="fourthredcir"/>
      </a>
        </>
    )
}

export default Seventh;