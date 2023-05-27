import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    useEffect(() => {
        const inputField = document.getElementsByClassName('input-field');

        for (let i = 0; i < inputField.length; i++) {
            const element = inputField[i].childNodes;
            if (element[0].value !== '') {
                if (element[1]) {
                    element[1].classList.add('active');
                }
            }
        }
    });

    return (<div className='side-bar'>
        <div className='links'>
            <Link to='/home'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/about-us'>About us</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contactus'>Contact Us</Link>
            <Link to='/sitecontactus'>Enquiry</Link>
            <Link to="/links">Social media</Link>
            <Link to='/admin-users'>Admin users</Link>
            <Link to='/change-password'>Change password</Link>
        </div>
    </div>);
}

export default SideBar;