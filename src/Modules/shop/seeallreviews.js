import React from "react";

import jenny from "../../assets/images/jenny.png";
import kathreen from "../../assets/images/kathreen.png";
import jane from "../../assets/images/jane.png";
import "../../css/sectionB.css";
import Rating from "@mui/material/Rating";
import "../../css/sectionB.css";

function SeeAllReviews() {
  return (
    <div className="seeallreviewnewpage">
     
      <br />
      <br />
      <section className="jenny-part1">
         
            <div className="review">
              <p className="jenny-name"> Nishi Lalwani</p> <br />
              <Rating name="read-only" value={4} readOnly />
              <br />
              <p className="review-loremabout">
                My friend recommended this hair removal cream as I keep
                traveling a lot. This cream is really travel-friendly and comes
                with a spatula which does the job really well.
              </p>
            </div>
          </section>
          <hr />
          <section className="kathryn-part2">
            
             
            <div className="review">
              <p className="kathryn-name">Shivika Shah</p> <br />
              <Rating name="read-only" value={3} readOnly /> <br />
              <p className="review-loremabout">
                Waxing has always caused problems to my skin. After trying out
                different products, I have finally found the perfect product.
                Zero zero has really helped me with this a lot without causing
                any skin irritation. Highly recommending it to all my friends.
              </p>
            </div>
          </section>
          <hr />
          <section className="jane-part3">
          
            <div className="review">
              <p className="jane-name">Riti Manek</p> <br />
              <Rating name="read-only" value={4} readOnly /> <br />
              <p className="review-loremabout">
                Zero zero’s smooth texture is gentle on the skin. I have got the
                best results using this product. It is really easy and
                effortless to use. It saves all the time and hassle that waxing
                causes.
              </p>
            </div>
           
          </section>
          
          
          <section  className="jane-part3">
       
          
          <div className="review">
          <p className="jane-name">Nupur Panya</p> <br />
          <Rating name="read-only" value={4} readOnly /> <br />
          <p className="review-loremabout">
            I have been loving this hair removal cream a lot. It makes the
            skin really smooth and I completely trust this product for my
            daughter’s skin.
          </p>
        </div>
          
          </section>
    </div>
  );
}
export default SeeAllReviews;
