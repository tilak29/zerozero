import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import jenny from "../../assets/images/jenny.png";
import kathreen from "../../assets/images/kathreen.png";
import jane from "../../assets/images/jane.png";
import keshroot1 from '../../assets/images/keshroot1.png';
import keshroot2 from '../../assets/images/keshroot2.png';
import keshroot3 from '../../assets/images/keshroot3.png';
import keshroot4 from '../../assets/images/keshroot4.png';
import keshroot5 from '../../assets/images/keshroot5.png';
import "../../css/review.css";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabpanelbox" sx={{ width: "98%" }}>
      <Box  sx={{ borderBottom: 1 }}>
        <p className="information">Important information</p><br/><br/>
  
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "black !important" }}
            label="  Product Details"
            {...a11yProps(0)}
          />
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

      <TabPanel value={value} index={0}>
        <div className="left1">
          <p>
            {" "}
            <b>Is Discontinued By Manufacturer</b> : Lorem
          </p>
          <p>
            <b>Product Dimensions</b> : Lorem Ipsum is simply
          </p>
          <p>
            <b>Date First Available </b> : Lorem Ipsum
          </p>
          <p>
            <b> Manufacturer</b> : Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <p>
            <b>ASIN </b> : Lorem Ipsum is
          </p>
          <p>
            <b>Item model number</b> : Lorem Ipsum is simply dummy text
          </p>
          <p>
            <b>Country of Origin</b> : Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <p>
            <b>Manufacturer</b> : Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <p>
            <b>Packer</b> : Lorem Ipsum
          </p>
          <p>
            <b>Item Weight</b> : Lorem Ipsum is simply dummy
          </p>
          <p>
            <b>Item Dimensions LxWxH</b> : Lorem Ipsum is simply dummy text of
            the printing and typesetting industry
          </p>
          <p>
            <b>Net Quantity</b> : Lorem Ipsum
          </p>
          <p>
            <b>Included Components</b> : Lorem Ipsum is simply
          </p>
          <p>
            <b>Generic Name</b> : Lorem Ipsum is simply dummy text
          </p>
        </div>
        <br/><br/><br/><br/>
        <div className="productimg">
        <img className='keshroot' src={keshroot1}  alt='img'></img>
        <img  className='keshroot' src={keshroot2}  alt='img'></img>
        <img className='keshroot2' src={keshroot3}  alt='img'></img>
        <img  className='keshroot' src={keshroot4}  alt='img'></img>
        <img className='keshroot' src={keshroot5}  alt='img'></img>

        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="reviewtab">
          <h1 className="abc">4.3/5 </h1>&nbsp; <p className="abc">Overall rating</p>
          <Button 
            sx={{
              fontFamily: "Gill Sans",
              fontSize: "12px",
            }}
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid red",
              // padding: "10px 45px 10px 30px",
              marginLeft: "950px" ,
              borderRadius: "0",
              textTransform: "none",
            }}
          >
            WRITE REVIEW
          </Button>
          <br />
          <br />
          <section className="part1">
            <img style={{ height: "45px", width: "45px" }} src={jenny} alt="" />

            <div className="review">
              <p className="je"> Jenny Wilson</p>
              <br />

              <Stack>
                <Rating name="half-rating" />
              </Stack>
              <br />

              <p className="loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <hr />
          <section className="part2">
            <div className=" img">
              <img
                style={{ height: "45px", width: "45px" }}
                src={kathreen}
                alt=""
              />
            </div>
            <div className="review">
              <p className="je">Kathryn Murphy</p>
              <br />
              <Stack>
                <Rating name="half-rating" />
              </Stack>
              <br />
              <p className="loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <hr />
          <section className="part3">
            <div className=" img">
              <img
                style={{ height: "45px", width: "45px" }}
                src={jane}
                alt=""
              />
            </div>
            <div className="review">
              <p className="je">Jane Cooper</p>
              <br />
              <Stack>
                <Rating name="half-rating" />
              </Stack>
              <br />
              <p className="loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <p className="reviews">See all reviews</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="prakash">
          <ul className="font2">
            <p className="font1-1">Shipping Policy</p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.{" "}
            </p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{" "}
            </p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.{" "}
            </p>
          </ul>
          <ul className="font2">
            <p className="font1-2">Return Policy </p>
            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.{" "}
            </p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{" "}
            </p>

            <p className="font2">
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p className="font2">
              {" "}
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.{" "}
            </p>
          </ul>
        </div>
      </TabPanel>
    </Box>
  );
}
