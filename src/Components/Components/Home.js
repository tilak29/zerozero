import React, { Component } from "react";

import First from "../../Components/home/First";
import Third from "../../Components/home/Third";
import Fourth from "../../Components/home/Forth";
import Fifth from "../../Components/home/Fifth";
import Sixth from "../../Components/home/Sixth";
import Seventh from "../../Components/home/Seventh";
import Instagram from "../../Components/home/instagram";
import Avaible from "../../Components/home/available";

import Second from "../../Components/home/Second";

class Home extends Component {
    render() {
      return (
    <div style={{}} >
     <First/>
     <Second/>
     <Third/>
     {/* <Fourth/>
     <Fifth/>
     <Sixth/>
     <Seventh/>
     <Instagram/>
     <Avaible/> */}
     
   
    </div>
  );
      }
}

export default Home;