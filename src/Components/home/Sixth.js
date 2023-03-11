import React from "react";
import fourthcircle from '../../assets/images/fourthcircle.png';
import sixth1 from '../../assets/images/sixth1.png';
import sixth2 from '../../assets/images/sixth2.png';
import sixth3 from '../../assets/images/sixth3.png';
import sixthredcir from '../../assets/images/sixthredcir.png';
import sixthredline from '../../assets/images/sixthredline.png';
import sixthline from '../../assets/images/sixthline.png';

function Card(props){
    return ( 
    <div class="sixth-card-bdr">
    <div className="sixth-card-all">
    <img class="sixth-card-img" src={props.image} alt="abc"/>
    <p class="sixth-card-name">{props.name}</p>
    <p class="sixth-card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry
     {props.text}</p>
    </div>
    </div>);
}


function Sixth(){
    return(
        <>
        <div className="sixth-sec">
        <div style={{display:"flex"}}>
            <p className="fourth-text">Testimonial</p>
            <img style={{height:"35px", width:"35px",marginTop:"2px" ,marginLeft:"-7px", zIndex:"-1"}} src={fourthcircle} alt="fourthcircle"/>
        </div>
        </div>

        <div style={{display:"flex",position:"relative", top:"70vh",marginLeft:"11%", marginTop:"2%"}}>
            <Card
            image={sixth1}
            name="Jane Cooper"
            text="" />
            <Card
            image={sixth2}
            name="Jenny Wilson"
            text="" />
            <Card
            image={sixth3}
            name="Kathryn Murphy"
            text="" />
        </div>
        <div style={{ display:"flex",position:"relative",top:"62vh", left:"36%"}}>
        <a href="#" style={{ display:"flex",position:"relative", top:"7vh",marginLeft:"11%",marginTop:"2%"}}>
        <img style={{width:"40px",height:"7px"}} src={sixthline} alt="fourthredcir"/>
        <img style={{width:"40px",height:"7px",marginLeft:"20px"}} src={sixthredline} alt="fourthredline"/>
        <img style={{width:"30px", marginTop:"-12px",marginLeft:"-15px"}} src={sixthredcir} alt="fourthredcir"/>
      </a>
        </div>
    
        </>
    )
}

export default Sixth;