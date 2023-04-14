import React from "react";
import ActionAreaCard from "./card";
import ActionAreaCard2 from "./card2";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../css/blog1.css";
import images from "../constants/images";
import { useState } from "react";
import Blog1 from '../assets/images/Blog Banner 01 copy.jpg'
import Blog2 from '../assets/images/Blog Banner 02 copy.jpg'





function Blogp1(){

     const[activePage,setActivePage]=useState(1);
     const OpenPage=(props)=>{
          const{children,page,index}=props
          return(
               <div hidden={page!==index}>
                    {page===index&&<div>{children}</div>}
               </div>
          )
     } 
     

    return(
    
            <div>
             {/* <center>
             <h1 className="ret-h1">Coming Soon<img src={image} className="ellipse"></img></h1><br/>

             </center> */}


     


        <section className="sec1">
             <h1 className="sec1h1">Blog</h1>          
             <img src={images.ellipse} className="ssec1img" alt="abc"></img>
        </section>


        {/* ******* blog1 ******** */}

        <section className="sec2">
          <div className="leftdivsec2">
          <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <img src={Blog1} className="sec2img" alt="abc"></img></Link></div>
             <div className="flexdiv"><br></br>
             <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlinktext">
             <p className="sec2p1" >Zero Zero Hair Removal Cream: An Effective Solution for Smooth Skin</p></Link>
             <p className="para">
             Unwanted hair growth can be a persistent problem for many individuals. While traditional hair removal methods like shaving, waxing, and threading are effective, they can be painful, time-consuming, and can cause skin irritation. This is where hair removal creams come in as a popular alternative to these traditional methods. Amongst the many hair removal creams available in the market, Zero Zero Hair Removal Cream....<br/><br/>
             </p> 
             </div>
        </section>

        {/* ******* blog2 ******** */}
        <section className="sec2">
          <div className="leftdivsec2">
               <Link to="/Blog2">
             <img src={Blog2} className="sec2img" alt="abc"></img></Link></div>
             <div className="flexdiv"> <br></br>
             <Link to="/Blog2" className="cardlinktext">
             <p className="sec2p1" >5 Benefits of Using a Hair Removal Cream</p></Link>
             <p className="para">
             Hair removal is a necessary grooming ritual for many individuals. Some people stay hair free for maintaining personal hygiene, while others prefer silky smooth skin. With a plethora of options available such as razors, waxing, and epilators, one popular method is the use of hair removal creams. Hair removal creams, also known as depilatory....<br/><br/>
             </p> 
             </div>
        </section>

        {/* <section className="ssec3">
             <h1 className="h1">All Blogs</h1>
                 <div className="sicon"> 
                 <img className="order-img" src={images.icon1} alt='tgv'/>
                 <img className="order-img2" src={images.icon2} alt='tgv'/>
                  </div>
        </section>

<OpenPage page={activePage} index={1}>

<section className="sec4">
        <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <ActionAreaCard/></Link>
        </section>

</OpenPage>
      

<OpenPage page={activePage} index={2}>

<section className="sec4">
        <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <ActionAreaCard2/></Link>
        </section>

</OpenPage>


        <Stack  spacing={2}>
             <Pagination className="paginationcolor" page={activePage} onChange={(event,newPage)=>setActivePage(newPage)} count={2} hidePrevButton hideNextButton color="standard" />
             </Stack> */}
    </div>
    )
}
export default Blogp1;