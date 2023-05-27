import React, { useEffect, useState } from 'react';
import SideBar from '../components/sideBar';
import api from '../api';

const Feedback = () => {
  

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        const { data } = await api.get('/sitecontactus');
        console.log(data);
        setUsersData(data);
    }

  return (
    <div className="page contact-us">
      <SideBar />
      <div className='container'>
      <h2>Enquiry</h2>
      <br />
            <table className='card'>
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Created Date</th>
                    </tr>
                    {usersData.map((item) => (
                        <tr>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.mobilenumber}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>
                            <td>{item.createddate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
export default Feedback;
