import React, { useEffect, useState } from 'react';

import MediaPicker from '../mediaePicker';
import api from '../../api';

const SectionB = () => {

    const [data, setData] = useState({
        title: '',
        cards: [
            {
                title: '',
                content: '',
                image: { file: '', image: '', status: 'none' },
            },
            {
                title: '',
                content: '',
                image: { file: '', image: '', status: 'none' },
            },
            {
                title: '',
                content: '',
                image: { file: '', image: '', status: 'none' },
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
        const _data = { title: '', cards: [] };

        data.cards.forEach(item => {
            if (item.image.status === 'updated') {
                formData.append('media', item.image.file);
                _data.cards.push({ title: item.title, content: item.content, });
            } else {
                _data.cards.push({ title: item.title, content: item.content, image: item.image.image });
            }
        });

        const isEmpty = () => {
            let res = null;
            if (data.title === '') { res = true };
            data.cards.forEach((item) => {

                if (item.title === '' || item.content === '') {
                    res = true;
                } else { res = false }
            });
            return res;
        };

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            _data.title = data.title;
            console.log(_data);
            formData.append('content', JSON.stringify(_data));
            const res = await api.post('home/section-b', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }
        }
    };

    useEffect(() => {
        const secBData = JSON.parse(sessionStorage.getItem('homeApi')).sectionB;
        console.log(secBData);
        _data.title = secBData.heading;
        // _data.cards = secBData.content;
        secBData.content.forEach((item, index) => {
            _data.cards[index] = { image: { image: secBData.media[index] }, title: item.title, content: item.content };
        });

        updateData();
    }, []);

    return (<div className='sec section-b'>
        <h2>Section - B</h2>
        <div className='input-field'>
            <input
                id='section-b-title'
                type='text'
                className='validate'
                onChange={text => {
                    text = text.currentTarget.value;
                    _data.title = text;
                    setData(data => ({
                        ...data,
                        ..._data,
                    }))
                }}
                value={data.title}
            />
            <label for='section-b-title'>Title</label>
        </div>
        <main>
            {
                data.cards.map((item, index) => (
                    <div className='card'>
                        <MediaPicker
                            type='image'
                            onChange={(file, image) => {
                                _data.cards[index].image.image = image;
                                _data.cards[index].image.file = file;
                                _data.cards[index].image.status = 'updated';
                                setData(data => ({
                                    ...data,
                                    ..._data
                                }))
                            }}
                            source={item.image.image}
                        />
                        <div className='input-field'>
                            <input
                                id={'section-b-card-title' + index}
                                type='text'
                                className='validate'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.cards[index].title = text;
                                    setData(data => ({
                                        ...data,
                                        ..._data,
                                    }));
                                }}
                                value={item.title}
                            />
                            <label for={'section-b-card-title' + index}>Title</label>
                        </div>
                        <div className='input-field'>
                            <textarea
                                id={'section-b-card-content-' + index}
                                className='materialize-textarea'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.cards[index].content = text;
                                    setData(data => ({
                                        ...data,
                                        ..._data,
                                    }))
                                }}
                                value={item.content}
                            />
                            <label for={'section-b-card-content-' + index}>Content</label>
                        </div>
                    </div>
                ))
            }
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionB;