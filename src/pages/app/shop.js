import React from "react";
import Paaragraf from "../../Modules/shop/sectiona";

import Slider from "../../Modules/shop/leftshope";
import "../../css/shop.css";


const Shop = () => {
  return (
    <section className="box">
      <section className="box1">
        <Slider />  
      </section>
      <section >
        <Paaragraf />
      </section>
    </section>

  );
};

export default Shop;
