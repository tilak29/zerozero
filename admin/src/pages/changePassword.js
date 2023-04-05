import React, { useState } from 'react';
import api from '../api';
import SideBar from '../components/sideBar';
import { decrypt, encrypt } from '../crypto';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);

    const handleSave = async () => {
        const userData = JSON.parse(decrypt(localStorage.getItem('userData')));
        const isValid = () => {
            let res = true;
            if (!oldPassword || !password || !repeatPassword) {
                window.M.toast({ html: "Please fill the all values" });
                res = false;
            } else if (oldPassword !== userData.password) {
                window.M.toast({ html: "Invalid old password" });
                res = false;
            } else if (password !== repeatPassword) {
                window.M.toast({ html: "Password does not match" });
                res = false;
            };
            return res;
        };

        if (isValid()) {
            const { data } = await api.post('/change-password', { password, _id: userData._id });
            if (data.status === 200) {
                window.M.toast({ html: "Password changed successfully" });
                const _userData = userData;
                userData.password = password;
                console.log(_userData);
                localStorage.setItem('userData', encrypt(JSON.stringify(_userData)));
            }
        }
    }

    return (<div className='page'>
        <SideBar />
        <div className='create-user'>
            <main className='card'>
                <div className="input-field col s12">
                    <input id="full-name" type="password" className="validate"
                        onChange={text => setOldPassword(text.currentTarget.value)}
                    />
                    <label for="full-name">Old password</label>
                </div>
                <div className="input-field col s12">
                    <input id="username" type="password" className="validate"
                        onChange={text => setPassword(text.currentTarget.value)}
                    />
                    <label for="username">New password</label>
                </div>
                <div className="input-field col s12">
                    <input id="username-" type="password" className="validate"
                        onChange={text => setRepeatPassword(text.currentTarget.value)}
                    />
                    <label for="username-">Repeat password</label>
                </div>
                <button className='save btn' onClick={handleSave}>Submit</button>
            </main>
        </div>
    </div>);
}

export default ChangePassword;