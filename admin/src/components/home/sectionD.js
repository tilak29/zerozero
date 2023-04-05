import React, { useEffect, useState } from 'react';

import images from '../../constants/images';

import MediaPicker from '../mediaePicker';

import api from '../../api';

const SectionD = () => {


    const [data, setData] = useState({
        title: '',
        item: [
            {
                title: '',
                content: '',
                image: { image: '', file: '', status: 'none' }
            },
            {
                title: '',
                content: '',
                image: { image: '', file: '', status: 'none' }
            },
            {
                title: '',
                content: '',
                image: { image: '', file: '', status: 'none' }
            },
        ],
    });

    const _data = data;

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data,
        }))
    };

    const handleSave = async () => {
        const formData = new FormData();
        const newData = [];
        const isEmpty = () => {
            let res = false;
            if (data.title === '') { res = true };
            data.item.forEach((item, index) => {
                if (item.title === '' || item.content === '') { res = true };
                if (item.image.status === 'updated') {
                    formData.append('media', item.image.file);
                    newData[index] = { title: item.title, content: item.content };
                } else {
                    newData[index] = { title: item.title, content: item.content, image: item.image.image };
                }
            });
            return res;
        };

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            formData.append('content', JSON.stringify({ title: data.title, item: newData }));
            const res = await api.post('home/section-d', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            }
        }
    };

    useEffect(() => {
        const secDData = JSON.parse(sessionStorage.getItem('homeApi')).sectionD;
        console.log(secDData);
        _data.title = secDData.heading;
        secDData.content.forEach((item, index) => {
            _data.item[index] = { title: item.title, content: item.content, image: { image: secDData.media[index] } }
        })
        updateData();
    }, []);

    return (<div className='section-d section-h sec'>
        <h2>Section - D</h2>

        <div className='input-field'>
            <input
                id={'section-d-card-main-title'}
                type='text'
                className='validate'
                onChange={text => {
                    text = text.currentTarget.value;
                    _data.title = text;
                    updateData();
                }}
                value={data.title}
            />
            <label for={'section-d-card-main-title'}>Title</label>
        </div>

        <div className='add' onClick={() => {
            _data.item.push({ name: '', review: '', date: '', image: { image: '', file: '', status: 'none' } });
            updateData();
        }}>
            <img src={images.pick2} />
        </div>

        <main>
            {
                data.item.map((item, index) => (
                    <div className='card'>
                        <div className='input-field'>
                            <input
                                id={'section-d-card-title' + index}
                                type='text'
                                className='validate'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.item[index].title = text;
                                    updateData();
                                }}
                                value={item.title}
                            />
                            <label for={'section-d-card-title' + index}>Title</label>
                        </div>
                        <div className='input-field'>
                            <textarea
                                id={'section-d-card-content-' + index}
                                className='materialize-textarea'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.item[index].content = text;
                                    updateData();
                                }}
                                value={item.content}
                            />
                            <label for={'section-d-card-content-' + index}>Content</label>
                        </div>
                        <MediaPicker
                            type='image'
                            source={item.image.image}
                            onChange={(file, image) => {
                                _data.item[index].image.file = file;
                                _data.item[index].image.image = image;
                                _data.item[index].image.status = 'updated';
                                updateData();
                            }}
                        />
                        <button className='btn' onClick={() => {
                            const newArray = _data.item.filter(item => (_data.item.indexOf(item) !== index));
                            _data.item = newArray;
                            updateData();
                        }}>Remove</button>
                    </div>
                ))
            }
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionD;