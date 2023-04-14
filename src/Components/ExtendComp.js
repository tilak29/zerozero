import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Components/Home';
import Shop from '../Components/Components/Shop';
import AboutUs from '../Components/Components/AboutUs';
import Blogpage from '../Components/Components/Blog';
import ContactUs from '../Components/Components/ContactUs';
import Cart from '../Components/Cart/Cart';
import Blogpage2 from './Components/blog/Product-info';
import Checkout from './Cart/checkoutpage';
import SeeAllReviews from '../Modules/shop/seeallreviews';
import Blog2 from '../Components/Components/blog/blog2'


class ExtendComp extends Component {
    render() {
    return (
        

        <Routes>
          <Route path="/blog/Zero-zero-product-key-ingredients-and-its-use" element={<Blogpage2/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/SeeAllReviews" element={<SeeAllReviews />} />     
          <Route path="/Blog2" element={<Blog2/>} />     
        </Routes>
    )
    }
}
export default ExtendComp;
