import React from "react";
import third1 from '../../assets/images/third1.png';
import third2 from '../../assets/images/third2.png';
import third3 from '../../assets/images/third3.png';
import third4 from '../../assets/images/third4.png';
import third5 from '../../assets/images/5 1.png';
import { display } from "@mui/system";


function Third(){
    return(
        <>
        
        <div className="third-sect">
            <div style={{display:"flex"}}> 
        <div style={{marginLeft:"3%"}}>
        <p className="third-text1">How to use Zero Zero</p>
        <p className="third-text2">doloremque laudantium, totam</p>
        </div>
        <div style={{marginLeft:"9%"}}>
        <p className="third-text3">omnis iste natus error sit voluptatem accusantium laudantium,</p>
        </div>
        </div>

        <div style={{marginTop:"70px", marginLeft:"2%"}}>
            <div style={{display:"flex"}}>
            <div className="third-border">
            <p className="third-number">1</p>
            <img className="third-image" src={third1} alt="third1"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            
            <div className="third-border">
            <p className="third-number">2</p>
            <img className="third-image" src={third2} alt="third2"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            </div>
        </div>

        <div style={{marginTop:"2%", marginLeft:"2%"}}>
            <div style={{display:"flex"}}>
            <div className="third-border3">
            <p className="third-number3">3</p>
            <img className="third-image" src={third3} alt="third3"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>

            <div className="third-border3">
            <p className="third-number3">4</p>
            <img className="third-image" src={third4} alt="third4"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            </div>
        </div>
        <div style={{marginTop:"2%", marginLeft:"2%"}}>
        <div style={{display:"flex"}}>
            <div className="third-border5">
            <p className="third-number">5</p>
            <img className="third-image" src={third5} alt="third5"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            </div>
        </div>


        </div>
        
        </>
    )
}

export default Third;