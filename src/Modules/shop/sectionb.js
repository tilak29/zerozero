import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../../css/sectionB.css";
import Rating from "@mui/material/Rating";
import productdetail1 from "../../assets/images/Product-detail-1.jpg";
import productdetail2 from "../../assets/images/Product-detail-2.jpg";
import productdetail3 from "../../assets/images/Product-detail-3.jpg";
import productdetail4 from "../../assets/images/Product-detail-4.jpg";
import productdetail5 from "../../assets/images/Product-detail-5.jpg";

import Writereview from "./writereview";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SectionB() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1 }}>
        <b className="information">Important information</b>
        <br />
        <br />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "black !important" }}
            label="  Product Details"
            {...a11yProps(0)}
          ></Tab>
          <Tab
            sx={{ color: "black !important" }}
            label="Reviews"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "black !important" }}
            label=" Shipping & Return"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <>
        {" "}
        <TabPanel value={value} index={0}>
          <div className="product-detail">
            <p>
              <b>How to Use: </b> Using the spatula provided, apply the cream in
              a thick layer over the skin, fully covering all unwanted hairs.
              Leave the cream on the skin for 6-8 minutes. Wipe off the cream
              from a small area to check if the hair is removed, if not, leave
              it on for another minute and check again. Scrape off the cream
              with the spatula or gently wipe with a wet cotton towel, rinse
              thoroughly and pat dry.
            </p>
            <br/>
            <p>
              <b>Precautions:</b>Do not exceed 10 minutes total application
              time. NOT SUITABLE for use on head, face, eyes, nose, ears, around
              the anus
            </p>
            <br/>
            <p>
              <b>Manufactured By:</b> Indo Herbal Products (Unit 2). Plot No.
              29, Sector 1-B, IIE Ranipur, Sidcul, Haridwar 249403 (U.K.) Regd.
              Office: C-84, Panchseel Enclave, New Delhi 110017
            </p>
            <br/>
            <p>
              <b>Mfg Lic. No.:</b> 20/C/U.A/2010
            </p>
            <br/>
            <p>
              <b>Marketed By: </b> Smart Laboratories Pvt. Ltd. 1004, Brooklyn
              Tower, Nr. YMCA Club, S. G. Highway, Ahmedabad 380051 (Guj.)
            </p>
            <br/>
            <p>care@smartlaboratories.co.in | +91-79–49136601</p>      <br/>
            <p>
              <b>Country of Origin:</b>India
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="productimg">
              <img className="keshroot" src={productdetail1} alt="img" />
              <img className="keshroot" src={productdetail2} alt="img" />
              <img className="keshroot-middle" src={productdetail3} alt="img" />
              <img className="keshroot" src={productdetail4} alt="img" />
              <img className="keshroot" src={productdetail5} alt="img" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="upper-line-review">
            <p className="overall-rating">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h1 className="overall-rating12">4.3/5  &nbsp; &nbsp; </h1> Overall Rating{" "}
            </p>
          
            <Writereview />
          </div>
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
          <hr/>
          
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

          <sup>
            <button className="see-all-review" >
              <a style={{textDecoration:"none",color:"red"}}  href="/SeeAllReviews ">See all reviews</a>
            </button>
          </sup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ul className="shipping-return-part1">
            <p>
              To initiate a cancellation, please contact us through the "Contact
              Us" link. We will respond within 24 hours.
            </p>
            <br />

            <p>
              To be eligible for a return, the item must be in its original
              condition and packaging. A refund will be issued to your original
              payment method upon receipt of the returned item. If the payment
              was made through COD, you will be prompted to provide your bank
              account details for a secure refund transaction. Returns cannot be
              requested until the item has been delivered
            </p>
            <br />

            <p>
              Only items that are damaged will be eligible for a return. Once
              the packaging has been opened, returns will not be accepted.
              Returns must be requested within 7 days of delivery.
            </p>
          </ul>
          <ul className="shipping-return-part2">
            <h4 className="return-font">Precautions: </h4>
            <p>
              It is recommended that you read all the precautions and directions
              before use.
            </p>
            <li className="paragraphs-fonts">
              Do not exceed 10 minutes of total application time.
            </li>

            <li className="paragraphs-fonts">
              Not suitable for head, face, eyes, nose, ears, around anus,
              genitals, nipples and any other sensitive body parts.
            </li>

            <li className="paragraphs-fonts">
              Do not use on varicose veins, scars, moles, spotty, broken,
              irritated, sunburnt skin, or on skin that has had an adverse
              reaction to hair removal creams in past.
            </li>

            <li className="paragraphs-fonts">
              Always leave a gap of 72 hours between hair removal sessions.
            </li>
            <li className="paragraphs-fonts">
              Check with your doctor before using if you are on any medications
              which can affect your skin.
            </li>

            <li className="paragraphs-fonts">Patch test is necessary.</li>

            <li className="paragraphs-fonts">
              If you experience any tingling sensation during the use, remove
              the product immediately and rinse thoroughly with cold water.
            </li>

            <li className="paragraphs-fonts">
              If a burning sensation persists after use, seek medical advice.
            </li>
            <li className="paragraphs-fonts">Keep out of reach of children.</li>
          </ul>
        </TabPanel>
      </>
    </Box>
  );
}
