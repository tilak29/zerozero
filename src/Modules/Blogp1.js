import React from "react";
import logo from '../../src/assets/images/round.png';
import rect from '../../src/assets/images/Rectangle.png';
import ActionAreaCard from "./card";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import sicon1 from '../../src/assets/icons/sicon1.png';
import sicon2 from '../../src/assets/icons/sicon2.png';
import "../css/blog1.css";



function Blogp1(){

    return(
        <>
     <div className="blogp1">

        <center>
         <section className="sec1">
             <h1 className="sec1h1">The Blog</h1>          
             <img src={logo} className="sec1h1img1" alt="abc"></img>
         </section>
        
        
        
        <section className="sec2">

        <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink"><img src={rect} className="sec2img1" alt="abc"></img></Link>
         <h2 className="sec2h2">LATEST</h2> 
    
         <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlinktext"> <p className="sec2p1" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Link>
        

         </section>
         </center>    
     
         <center>
         <p className="para">
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur....<br/><br/>26 Dec 2022
         </p>
         </center>

         <center>
         <section className="sec1">
             <h1 className="sec1h2">All Blogs<sub>
                 <div className="sicon"> 
                 <img className="order-img" src={sicon1} alt='tgv'/>
                 <img className="order-img2" src={sicon2} alt='tggv'/>
                  </div>
                 
                  </sub></h1>
            
         </section>
         </center>
         <center>
         <section className="card">
         <center>

             <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink"><ActionAreaCard/></Link>
            <Stack  spacing={2}>
                
             <Pagination className="paginationcolor" count={12} hidePrevButton hideNextButton color="standard" />

         </Stack>

             </center>    
         </section>
        </center>
        
     </div>
    </>
    )
}
export default Blogp1;