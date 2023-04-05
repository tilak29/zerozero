import React, { useEffect, useState } from 'react';

import MediaPicker from '../mediaePicker';
import api from '../../api';

const SectionF = () => {

    const [data, setData] = useState({
        title: '',
        media: [
            { image: { file: null, image: '' }, url: '' },
            { image: { file: null, image: '' }, url: '' },
            { image: { file: null, image: '' }, url: '' },
        ]
    });

    const _data = data;

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data,
        }));
    };

    const handleSave = async () => {

        const isEmpty = () => {
            let res = false;
            if (data.title === '') { res = true };
            data.media.forEach(item => {
                if (item.url === '') { res = true };
            });
            return res;
        };

        if (!isEmpty()) {
            const formData = new FormData();
            const newData = [];
            data.media.forEach((item, index) => {
                if (item.image.status === 'updated') {
                    formData.append('media', item.image.file);
                    newData[index] = { url: item.url };
                } else {
                    newData[index] = { url: item.url, image: item.image.image };
                }
            });

            formData.append('content', JSON.stringify({
                title: data.title,
                content: newData,
            }));

            const res = await api.post('home/section-f', formData);

            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }

        } else {
            window.M.toast({ html: 'Please fill the all values' })
        }
    };

    useEffect(() => {
        const secFData = JSON.parse(sessionStorage.getItem('homeApi')).sectionF;
        console.log(secFData);
        _data.title = secFData.heading;
        secFData.content.forEach((item, index) => {
            _data.media[index] = { url: item, image: { image: secFData.media[index] } };
        });
        updateData();
    }, []);

    return (<div className='sec section-f'>
        <h2>Sectoon - F</h2>
        <div className="input-field col s12">
            <input id="section-f-title" type="text" className="validate"
                value={data.title}
                onChange={text => {
                    text = text.currentTarget.value;
                    _data.title = text;
                    updateData();
                }}
            />
            <label for="section-f-title">Title</label>
        </div>
        <main>
            {
                data.media.map((item, index) => (
                    <div className='card'>
                        <MediaPicker
                            type='image'
                            source={item.image.image}
                            onChange={(file, image) => {
                                _data.media[index].image = { file, image, status: 'updated' };
                                updateData();
                            }}
                        />
                        <div className="input-field col s6">
                            <input id={'section-f-input-' + index} type="text" className="validate"
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.media[index].url = text;
                                    updateData();
                                }}
                                value={data.media[index].url}
                            />
                            <label for={'section-f-input-' + index}>URL</label>
                        </div>
                    </div>
                ))
            }
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionF;