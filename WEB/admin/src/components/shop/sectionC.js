import React, { useState,useEffect } from 'react';
import api from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const SNRForm = () => {
  const [data, setData] = useState({
    title: '',
    price: '',
    content: ''
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const _data = data;

  const updateData = () => {
      setData(data => ({
          ...data,
          ..._data,
      }))
  };

  useEffect(() => {
    const secCData = JSON.parse(sessionStorage.getItem('shopApi')).sectionC;
    console.log(secCData);
    _data.title = secCData.heading;
    _data.content = secCData.content;
  

    updateData();
}, []);

  const handleSave = async () => {
    // Create a new FormData object to store the data and image
    const formData = new FormData();
    formData.append('content',JSON.stringify({ content: _data.content }));

    const res = await api.post('shop/sectionC', formData);
    if (res.data.status === 200) {
      alert('Data saved successfully');
      setData({
        content: ''
      });
    }
  };

  return (
    <div className='sec' style={{marginTop:"10vh"}}>
      <h2> Shipping And Return</h2>
   <div className='input-group'>
        <label htmlFor='content'>Content:</label>
        <ReactQuill
          value={data.content}
          onChange={(value) => setData({...data, content: value})}
        />
      </div>
      
      <button className='save btn' onClick={handleSave}>
        Save
      </button>
      
    </div>
  );
};

export default SNRForm;
