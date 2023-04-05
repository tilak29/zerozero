import React from "react";
import ActionAreaCard from "./card";
import ActionAreaCard2 from "./card2";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../css/blog1.css";
import images from "../constants/images";
import { useState } from "react";
import image from '../assets/images/Ellipse.jpg'





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
            <div className="maindiv">
             <center>
             <h1 className="ret-h1">Coming Soon<img src={image} className="ellipse"></img></h1><br/>

             </center>


        </div>

{/* 
        <section className="sec1">
             <h1 className="sec1h1">Blog</h1>          
             <img src={images.ellipse} className="ssec1img" alt="abc"></img>
        </section>

        <section className="sec2">
          <div className="leftdivsec2">
          <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <img src={images.main} className="sec2img" alt="abc"></img></Link></div>
             <div className="flexdiv">
             <h2 className="sec2h2">LATEST</h2> <br></br>
             <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlinktext">
             <p className="sec2p1" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Link>
             <p className="para">
             Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur....<br/><br/>26 Dec 2022
             </p> 
             </div>
        </section>

        <section className="ssec3">
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
             </Stack>

              */}







    </div>
    )
}
export default Blogp1;