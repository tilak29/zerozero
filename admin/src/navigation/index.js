import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import AboutUs from '../pages/aboutUs';
import Blog from '../pages/blog';
import AddBlogPost from '../pages/addBlogPost';
import Shop from '../pages/shop';
import Analytics from '../pages/analytics';
import Login from '../pages/login';
import CreateUser from '../pages/createUser';
import ChangePassword from '../pages/changePassword';
import AdminUsers from '../pages/adminUsers';

const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        resize();
    }, []);

    const resize = () => {
        if (document.body.offsetWidth < 500) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', resize);

    return (<Router>
        <Routes>
            {!localStorage.getItem('userData') && (
                <Route path='/login' element={<Login />} />
            )}
            {localStorage.getItem('userData') && (
                <>
                    <Route path='/' element={<Analytics />} />
                    {!isMobile && (
                        <>
                            <Route path='/home' element={<Home />} />
                            <Route path='/about-us' element={<AboutUs />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/blog/add' element={<AddBlogPost />} />
                            <Route path='/blog/edit/:postId' element={<AddBlogPost />} />
                            <Route path='/users/create' element={<CreateUser />} />
                            <Route path='/shop' element={<Shop />} />
                            <Route path='/change-password' element={<ChangePassword />} />
                            <Route path='/admin-users' element={<AdminUsers />} />
                            <Route path='/users/edit/:id' element={<CreateUser />} />
                        </>
                    )}
                </>
            )}
        </Routes>
    </Router>);
}

export default Navigation;