import React, { useEffect, useState } from 'react';

import SideBar from '../components/sideBar';

import api from '../api';
import { Link, useNavigate } from 'react-router-dom';

const AdminUsers = () => {

    const navigate = useNavigate();

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        const { data } = await api.get('/admin-users');
        console.log(data);
        setUsersData(data);
        // setTimeout(() => {
        //     setUsersData(data2 => ([...data2, ...data]));
        // }, 2000)
    }

    return (<div className='admin-users page'>
        <SideBar />
        <div className='container'>
            <br />
            <br />
            <Link to='/users/create' className='add-user_'>
                + Add User
            </Link>
            <br />
            <br />
            <table className='card'>
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                    </tr>
                    {usersData.map((item) => (
                        <tr onClick={() => navigate('/users/edit/' + item._id)}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}

export default AdminUsers;