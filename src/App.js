import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from './assets/images/logos.png'
import './App.css'
import Searchbar from './Modules/searchbar';
import Footer1 from './Components/home/footer';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ExtendComp from './Components/ExtendComp';
import Cart from './Modules/PopCart';
import Login from "../src/Components/Components/auth-pages/Login"



const App = () => {

  
  const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    /********Popup****** */
    const[popup,SetPop]=useState(false);
    const handleClickOpen=()=>{
      SetPop(!popup);
    }
    /**************login/signup*************/
    const[popupL,SetPopL]=useState(false);
    const handleClickOpen2=()=>{
      SetPopL(!popupL);
    }
    /******
    // const [ modal, setmodal ] = useState(false)

    // const closemodal=()=>{
    //     setmodal(false);
    //  }
    // const [ loginpop,Setpop]=useState(false)
    // const closeloginpop=()=>{
    //   setloginpop(false)
    // }*/
    

    return (
      <div  className='container'>
        <AppBar>
          <box className='navbar'>
            <p className='line'>Get 10% off on your first order use code Zero Zero 22</p>
          </box>

          <Toolbar disableGutters className='nav' >
          <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
            </div>

            <Link to='/'><img className='zeroimg' src={logo} alt="" /></Link>
            
            <Box className="navi"  >

              <section className={`navigations  ${showNavbar && 'active'}`}>
                <div className='ul'>
                <Link className='li' to='/'>Home</Link>
                <Link className='li' to='/Shop'>Shop</Link>
                <Link className='li' to='/aboutus'>About us</Link>
                <Link className='li' to='/blog'>Blog</Link>
                <Link className='li' to='/contactus'>Contact us</Link>
                <Link className='li' to='/Cart'>Cart</Link>
                </div>
              </section>
            </Box>

            <Box className="headericons">
              <IconButton > <Searchbar /></IconButton>

              <IconButton onClick={handleClickOpen2}> <PersonIcon /></IconButton>


              <IconButton  onClick={handleClickOpen}>
                <LocalMallIcon />
                </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
     
          {popup?
            <div className='main'>
                  
                  <Cart />
            </div> : ""}

        {popupL ?
          <div className='main_login'>
                <Login />     
                
          </div> : ""}
       
        <ExtendComp/>
        <Footer1 />
      </div>
    );
  
}

export default App;