import React from "react";
import Shop from "../pages/app/shop";
import BasicTabs from "../Modules/shop/sectionb";
import About from "../Modules/shop/Aboutproduct";
import "..//css/index.css";



const Navigation = () => {
  return (
    
      <div className="maincontainer">
        <Shop />
        <div className="diggu">
          <About />
          <BasicTabs />
        </div>

      </div>
  
  );
};

export default Navigation;
