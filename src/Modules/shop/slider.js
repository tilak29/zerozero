import React, { useEffect, useRef, useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import productlisting1 from "../../assets/images/Product-listing-1.png";
import productlisting2 from "../../assets/images/Product-listing-2.jpg";
import productlisting3 from "../../assets/images/Product-listing-3.png";
import productlisting4 from "../../assets/images/Product-listing-4.jpg";
import productlisting5 from "../../assets/images/Product-listing-5.jpg";
import "../../css/sectiona.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const [imageHeight, setImageHeight] = useState(0);

  const mainImageRef = useRef();

  const productImages = [
    { image: productlisting1 },
    { image: productlisting2 },
    { image: productlisting3 },
    { image: productlisting4 },
    { image: productlisting5 },
  ];

  useEffect(() => {
    const imgs = document.getElementsByClassName("imgs");
    if (index !== null) {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.border = "none";
      }
      imgs[index].style.border = "1px solid #C12222";
    }
  }, [index]);

  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index < productImages.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    changeImageHeight();
  }, []);

  const changeImageHeight = () => {
    mainImageRef.current.style.height =
      mainImageRef.current.offsetWidth * 1.001 + "px";
    const imgs = document.getElementsByClassName("imgs");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.height = mainImageRef.current.offsetWidth / 5 - 10 + "px";
      imgs[i].style.width = mainImageRef.current.offsetWidth / 6 + "px";
      document.querySelector(".images").style.width =
        mainImageRef.current.offsetWidth / 6 + "px";
    }
  };

  window.addEventListener("resize", changeImageHeight);

  return (
    <div className="product">
      <section id="ls">
        <ChevronLeftIcon id="left" onClick={handleLeft} />
        <img
          src={index === null ? productlisting1 : productImages[index].image}
          alt=""
          className="main-image"
          style={{ height: imageHeight }}
          ref={mainImageRef}
        />
        <ChevronRightIcon id="right" onClick={handleRight} />
        <div className="images">
          {productImages.map((item, index) => (
            <img
              src={item.image}
              alt=""
              onClick={() => setIndex(index)}
              className="imgs"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slider;
