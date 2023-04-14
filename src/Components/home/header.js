import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from  '../../assets/images/logos.png';
import red from '../../assets/images/red.png';
import { useState } from 'react';
import { useEffect } from 'react';



const pages = ['Home', 'Shop', 'About us' ,'Blog','Contact us','Cart (2)'];
// const settings = ['zerozero', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isOpen , setIsOpen] = useState(true);

  useEffect(() => {
  
    const closeDropdown = e => {
      if(e.path[0].tagName !== 'BUTTON'){
        setIsOpen(false);
      }
  };

  document.body.addEventListener('click', closeDropdown);

  return () => document.body.removeEventListener('click',closeDropdown);


},
    []);

  return (
    <AppBar  sx={{maxWidth:"100vw"}} >
        
        <Toolbar disableGutters className='nav' >

          <Box sx={{flexGrow: 1,textAlign:"center",display: { xs: 'none', md: 'flex' } }}>
       
          <img className='image1'  style={{margin:"auto 251px auto 150px", height:"50px", width:"48px"}} src={logo}/>
          {/* <img className='image2' style={{margin:"auto 101px auto -100px", height:"44px", width:"42px" }} src={red}/>  */}
   
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                // onClick={() => setIsOpen(prev != prev)}
                sx={{ my: 2, color: 'black', display: 'block'}}
              >
          
              {page}
             
              </Button>  
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
              onClick={handleOpenUserMenu} 
              sx={{ p: 0 }}>
              <div className='icon' style={{marginRight:100 }} >
              <SearchIcon style={{marginRight:20 }}/><PersonIcon  style={{marginRight:20 }}/><LocalMallIcon  style={{marginRight:20 }}/>
              </div> 
              
              </IconButton>
             
            </Tooltip>

            <Menu
              sx={{ mt: '85px'  }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
         
            </Menu>
          </Box>
        </Toolbar>
  
    </AppBar>
  );
}
export default Header;

// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import icons from '../../constants/icons';
// import images from '../../constants/images';



// const Header = ({ activepage }) => {


//     const handleClose = () => {
//         document.querySelector('.cover').style.display = 'none';
//         document.querySelector('.side-menu').style.left = '-500px';
//     }

//     const handleOpen = () => {
//         document.querySelector('.cover').style.display = 'flex';
//         document.querySelector('.side-menu').style.left = '0';
//     }

//     useEffect(() => {
//         handleClose();
//         window.scrollTo(0, 0);
//     }, [])

//     return (<div className='header'>
       
//         <div className='cover' onClick={handleClose}></div>
//         {/* top section */}
//         <div className='main-header-section'>
//             <span className='line'></span>
//             <div className='header-section'>
//                 {/* nav bar */}
//                 <div className='nav-bar'>
//                     <section className='brand-logo'>
//                         <Link to='/'>
//                             <img src={images.logo} className='logo' />
//                         </Link>
//                     </section>
//                     <section className='navigations'>
//                         <Link to='/' className={activepage === 'home' ? 'active-page' : null}>Home</Link>
//                         <Link to='/shop' className={activepage === 'shop' ? 'active-page' : null} >Shop</Link>
//                         <Link to='/about-us' className={activepage === 'about-us' ? 'active-page' : null}>About us</Link>
//                         <Link to='/blog' className={activepage === 'blog' ? 'active-page' : null}>Blog</Link>
//                         <Link to='/contact-us' className={activepage === 'contact-us' ? 'active-page' : null}>Contact us</Link>
//                     </section>
//                     <section className='third-section'>
//                         <div className='icons'>
//                             <img src={icons.search} />
//                             <img src={icons.user}/>
//                             <img src={icons.shoppingBag} />
//                             {/* <img src={icons.shoppingBag} onClick={() => dispatch(showCart(true))} /> */}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </div>
//         <div className='mobile-nav'>
//             <section id='menu-section'>
//                 <div className='menu-icon' onClick={handleOpen}>
//                     <img src={icons.menu} />
//                 </div>
//             </section>
//             <section className='mobile-logo'>
//                 <Link to='/'>
//                     <img src={images.logo} className='mo-logo' />
//                 </Link>
//             </section>
//             <section className='third-section'>
//                 <div className='icons'>
//                     <img src={icons.search} />
//                     <img src={icons.user}/>
//                     <img src={icons.shoppingBag} />
//                     {/* <img src={icons.shoppingBag} onClick={() => dispatch(showCart(true))} /> */}
//                 </div>
//             </section>
//         </div>
//         <div className='side-menu'>
//             <main>
//                 <Link to='/'>Home</Link>
//                 <Link to='/shop'>Shop</Link>
//                 <Link to='/about-us'>About us</Link>
//                 <Link to='/blog'>Blog</Link>
//                 <Link to='/contact-us'>Contact us</Link>
//             </main>
//             <div className='close' onClick={handleClose}>X</div>
//         </div>
//     </div >);
// }

// export default Header;