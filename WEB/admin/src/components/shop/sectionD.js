import React, { useEffect, useState } from 'react';
import images from '../../constants/images';

import MediaPicker from '../mediaePicker';
import api from '../../api';

const DescImages = () => {

    const [data, setData] = useState({
        slider: [{ image: '', file: null, type: 'image', status: 'none' }, { image: '', file: null, type: 'image', status: 'none' }, { image: '', file: null, type: 'image', status: 'none' }]
    });

    const _data = data;

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data
        }));
    };

    const handleSave = async () => {

        const formData = new FormData();
        const newData = [];

        data.slider.forEach((item, index) => {
            const { status, file, image } = item;
            if (status === 'updated') {
                formData.append('media', file);
                newData[index] = { image: null };
            } else {
                newData[index] = { image };
            }
        });

        formData.append('content', JSON.stringify(newData));

        const isEmpty = () => {
            let res = false;
            data.slider.forEach(item => {
                if (item.image === '') {
                    res = true;
                };
            });
            return res;
        };

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            const res = await api.post('shop/sectionD', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            };
        }
    };

    useEffect(() => {
        const sliderData = JSON.parse(sessionStorage.getItem('shopApi')).sectionD;
        console.log(sliderData);
        _data.slider = sliderData;
        updateData();
    }, []);

    return (<div className='sec slider'>
        <h2>Images for ProductDetails</h2>

        <div className='add' onClick={() => {
            _data.slider.push({ image: '', file: null, status: 'updated' });
            updateData();
        }}>
            <img src={images.pick2} style={{width:"100px"}} />
        </div>

        <main style={{display:"flex"}}>
            {
                data.slider.map((item, index) => (
                    <MediaPicker
                        onChange={(file, image) => {
                            _data.slider[index] = { file, image, status: 'updated' };
                            updateData();
                        }}
                        source={data.slider[index].image}
                        Delete
                        onDelete={() => {
                            const newData = _data.slider.filter(item => (_data.slider.indexOf(item) !== index));
                            _data.slider = newData;
                            updateData();
                        }}
                    />
                ))
            }
        </main>
        <button className='save btn' onClick={handleSave}>Save</button>
    </div >);
}

export default DescImages;


















