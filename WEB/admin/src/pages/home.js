import React, { useEffect, useState } from "react";

import SideBar from "../components/sideBar";
// import SectionA2 from '../components/homezerozero/sectionA2';
// import Slider from '../components/home/slider';
import SectionA from "../components/home/sectionA";
import SectionB from "../components/home/sectionB";
import SectionC from "../components/home/sectionC";
import SectionE from "../components/home/sectionE";
import SectionF from "../components/home/sectionF";
// import SectionG from "../components/home/sectionG";
// import SectionH from "../components/home/sectionH";
import SectionD from "../components/home/sectionD";
import callHomeApi from "../callApi/home";

const Home = () => {
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    callHomeApi().then((res) => {
      setApiCalled(true);
      change();
    });
  });

  const change = () => {
    const inputField = document.getElementsByClassName("input-field");

    for (let i = 0; i < inputField.length; i++) {
      const element = inputField[i].childNodes;
      if (element[0].value !== "") {
        element[1].classList.add("active");
      }
    }
  };

  return (
    <>
      {apiCalled ? (
        <div className="page home">
          <SideBar />
          <div className="container">
            {/*<Slider />*/}
            <SectionA />

            <SectionB />
            <SectionC />
            <SectionD />
            <SectionE />
            <SectionF />
           {/*<SectionG />
            <SectionH /> */} 
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
