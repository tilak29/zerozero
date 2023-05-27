import React, { useState,useEffect } from 'react';
import api from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Highlits = () => {
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
    const secFData = JSON.parse(sessionStorage.getItem('shopApi')).sectionF;
    console.log(secFData);
    _data.title = secFData.heading;
    _data.content = secFData.content;
  

    updateData();
}, []);

  const handleSave = async () => {
    // Create a new FormData object to store the data and image
    const formData = new FormData();
    formData.append('content',JSON.stringify({ content: _data.content }));

    const res = await api.post('shop/sectionF', formData);
    if (res.data.status === 200) {
      alert('Data saved successfully');
      setData({
        content: ''
      });
    }
  };

  return (
    <div className='sec' style={{marginTop:"10vh"}}>
      <h2>Highlights</h2>
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

export default Highlits;