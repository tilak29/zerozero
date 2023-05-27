import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../api';
import { encrypt } from '../crypto';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async () => {
        if (!username || !password) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            const { data } = await api.get(`/admin-user/${username}/${password}`);
            if (data.status === 200) {
                localStorage.setItem('userData', encrypt(JSON.stringify(data.data)));
                window.location.assign('/analytics');
            } else if (data.status === 500) {
                window.M.toast({ html: 'User not found' });
            } else {
                window.M.toast({ html: 'Wrong password' });
            }
        }
    };

    return (<div className='login'>
        <main className='auth'>
            <h2>Log in</h2>
            <p>Please enter your details</p>
            <input
                type='text'
                placeholder='Username'
                onChange={text => {
                    setUsername(text.currentTarget.value);
                }}
            />
            <input
                type='text'
                placeholder='Password'
                onChange={text => {
                    setPassword(text.currentTarget.value);
                }}
            />
            <button onClick={handleSubmit}>Log in</button>
        </main>
    </div>);
}

export default Login;