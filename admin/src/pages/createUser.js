import React, { useEffect, useState } from 'react';

import SideBar from '../components/sideBar';

import api from '../api';
import { useParams } from 'react-router-dom';

const CreateUser = () => {

    const { id } = useParams();

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [role, setRole] = useState(null);

    const handleSave = async () => {
        if (firstname && lastname && username && password && role) {

            let data = null;

            if (!id) {
                data = await api.post('/create-user', { firstname, lastname, username, password, role });
                data = data.data;
            } else {
                data = await api.post('/update-admin-user', { firstname, lastname, username, password, role, _id: id });
                data = data.data;
            };

            if (id) {
                window.M.toast({ html: "User updated successfully" });
            } else {
                if (data.status === 200) {
                    window.M.toast({ html: "User created successfully" });
                }
            }

            console.log(data);
        } else {
            window.M.toast({ html: "Please fill the all values" });
        }
    };

    const getUserDetail = async () => {
        const { data } = await api.get(`/get-user/${id}`);
        console.log(data);
        setFirstname(data.first_name);
        setLastname(data.last_name);
        setUsername(data.username);
        setPassword(data.password);
        setRole(data.role);
    }

    useEffect(() => {
        if (id) {
            getUserDetail();
        }
    }, []);

    return (<div className='page'>
        <SideBar />
        <div className='create-user'>
            <main className='card'>
                <div className="input-field col s12">
                    <input id="full-name" type="text" className="validate"
                        onChange={text => setFirstname(text.currentTarget.value)}
                        value={firstname}
                    />
                    <label for="full-name">First name</label>
                </div>
                <div className="input-field col s12">
                    <input id="full-name--" type="text" className="validate"
                        onChange={text => setLastname(text.currentTarget.value)}
                        value={lastname}
                    />
                    <label for="full-name--">Last name</label>
                </div>
                <div className="input-field col s12">
                    <input id="username" type="text" className="validate"
                        onChange={text => setUsername(text.currentTarget.value)}
                        value={username}
                    />
                    <label for="username">Username</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="text" className="validate"
                        onChange={text => setPassword(text.currentTarget.value)}
                        value={password}
                    />
                    <label for="password">Password</label>
                </div>
                <div class="input-field col s12">
                    <select id='lol'
                        onChange={text => setRole(text.currentTarget.value)}
                        value={role}
                    >
                        <option value="" disabled selected>Select role</option>
                        <option>Admin</option>
                        <option>Blogger</option>
                    </select>
                    {/* <label for='lol'>Materialize Select</label> */}
                </div>
                <button className='save btn' onClick={handleSave}>Create</button>
            </main>
        </div>
    </div>);
}

export default CreateUser;