import React, { useEffect, useState } from 'react';
import SideBar from '../components/sideBar';
import MediaPicker from '../components/mediaePicker';
import api from '../api';

const ContactUs = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    titleb: '',
    email: '',
    phone: '',
    whatsapp: '',
    titlec: '',
    address: '',
    titled: '',
    weblablea: '',
    linka: '',
    weblableb: '',
    linkb: '',
  });
  const _data = data;

  const handleSave = async () => {
    const formData = new FormData();
    const isEmpty = () => {
      let res = false;
      if (!data.title || !data.description || !data.titleb || !data.email || !data.phone || !data.whatsapp
        || !data.titlec || !data.address || !data.titled || !data.weblablea|| !data.linka || !data.weblableb|| !data.linkb) {
        res = true;
      };
      return res;
    };
    if (isEmpty()) {
      window.M.toast({ html: 'Please fill the all values' });
    } else {
      formData.append('content', JSON.stringify({
        title: data.title,
        description: data.description,
        titleb: data.titleb,
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsapp,
        titlec: data.titlec,
        address: data.address,
        titled: data.titled,
        weblablea: data.weblablea,
        linka: data.linka,
        weblableb: data.weblableb,
        linkb: data.linkb,
      }));

      const res = await api.post('/contactus', formData);
      if (res.data.status === 200) {
        window.M.toast({ html: 'Data saved successfully' });
      }
    }
  };
  const updateData = () => {
    setData(data => ({
      ...data,
      ..._data,
    }));
  };

  const getApiData = async () => {
    let res = await api.get('/contactus');
    res = res.data;
    _data.title = res.title;
    _data.description = res.description;
    _data.titleb = res.titleb;
    _data.address = res.address;
    _data.email = res.email;
    _data.phone = res.phone;
    _data.whatsapp = res.whatsapp;
    _data.titlec = res.titlec;
    _data.titled = res.titled;
    _data.weblablea = res.weblablea;
    _data.linka = res.linka;
    _data.weblableb = res.weblableb;
    _data.linkb = res.linkb;
    updateData();
  }

  useEffect(() => {
    getApiData();
}, [])

  return (
    <div className="page contact-us">
      <SideBar />
      <div className="container">
        {/* ********Section-B*********** */}
      <div className="right-side">
          <h2>Section - A</h2>
          <div className="sec">
            <div className="input-field">
              <input
                id="title"
                type="text"
                className="materialize-textarea"
                value={data.title}
                onChange={titles => {
                  titles = titles.currentTarget.value;
                  _data.title = titles;
                  updateData();
                }}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="sec">
            <div className="input-field">
              <textarea
                id="description"
                className="materialize-textarea"
                style={{ height: 100 }}
                value={data.description}
                onChange={descriptions => {
                  descriptions = descriptions.currentTarget.value;
                  _data.description = descriptions;
                  updateData();
                }}
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
        </div>
        {/* ********Section-B*********** */}
        <div className="right-side">
          <h2>Section - B</h2>
          <div className="sec">
            <div className="input-field">
              <input
                id="titleb"
                type="text"
                className="materialize-textarea"
                value={data.titleb}
                onChange={titlesb => {
                  titlesb = titlesb.currentTarget.value;
                  _data.titleb = titlesb;
                  updateData();
                }}
              />
              <label htmlFor="title">Title-B</label>
            </div>
          </div>
          <div className='input-field'>
            <input id='email'
              type='text'
              className='materialize-textarea'
              value={data.email}
              onChange={emails => {
                emails = emails.currentTarget.value;
                _data.email = emails;
                updateData();
              }}
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className="input-field">
            <input
              id="phone"
              type="text"
              className="materialize-textarea"
              value={data.phone}
              onChange={phones => {
                phones = phones.currentTarget.value;
                _data.phone = phones;
                updateData();
              }}
            />
            <label htmlFor='phone'>Phone</label>
          </div>
          <div className="input-field">
            <input
              id="whatsapp"
              type="text"
              className="materialize-textarea"
              value={data.whatsapp}
              onChange={whatsapp => {
                whatsapp = whatsapp.currentTarget.value;
                _data.whatsapp = whatsapp;
                updateData();
              }}
            />
            <label htmlFor='phone'>Whatsapp Number</label>
          </div>
        </div>
        {/* ********Section-C*********** */}
        <div className="right-side">
          <h2>Section - C</h2>
          <div className="sec">
            <div className="input-field">
              <input
                id="titlec"
                type="text"
                className="materialize-textarea"
                value={data.titlec}
                onChange={titlesc => {
                  titlesc = titlesc.currentTarget.value;
                  _data.titlec = titlesc;
                  updateData();
                }}
              />
              <label htmlFor="title">Title-C</label>
            </div>
          </div>
          <div className="sec">
          <div className="input-field">
            <textarea
              id="address"
              className="materialize-textarea"
              style={{ height: 100 }}
              value={data.address}
              onChange={addresss => {
                addresss = addresss.currentTarget.value;
                _data.address = addresss;
                updateData();
              }}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <div className="right-side">
          <h2>Section - D</h2>
          <div className="sec">
            <div className="input-field">
              <input
                id="titled"
                type="text"
                className="materialize-textarea"
                value={data.titled}
                onChange={titlesd => {
                  titlesd = titlesd.currentTarget.value;
                  _data.titled = titlesd;
                  updateData();
                }}
              />
              <label htmlFor="title">Title-D</label>
            </div>
          </div>
        </div>
        <div className="input-field">
            <input
              id="weblablea"
              type="text"
              className="materialize-textarea"
              value={data.weblablea}
              onChange={weblablea => {
                weblablea = weblablea.currentTarget.value;
                _data.weblablea = weblablea;
                updateData();
              }}
            />
            <label htmlFor='phone'>Weblable-A</label>
          </div>
          <div className="input-field">
            <input
              id="linka"
              type="text"
              className="materialize-textarea"
              value={data.linka}
              onChange={linka => {
                linka = linka.currentTarget.value;
                _data.linka = linka;
                updateData();
              }}
            />
            <label htmlFor='phone'>Link-A</label>
          </div>
          <div className="input-field">
            <input
              id="weblableb"
              type="text"
              className="materialize-textarea"
              value={data.weblableb}
              onChange={weblableb => {
                weblableb = weblableb.currentTarget.value;
                _data.weblableb = weblableb;
                updateData();
              }}
            />
            <label htmlFor='phone'>Weblable-B</label>
          </div>
          <div className="input-field">
            <input
              id="linkb"
              type="text"
              className="materialize-textarea"
              value={data.linkb}
              onChange={linkb => {
                linkb = linkb.currentTarget.value;
                _data.linkb = linkb;
                updateData();
              }}
            />
            <label htmlFor='phone'>Link-B</label>
          </div>
        </div>
        <button className="btn save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
export default ContactUs;