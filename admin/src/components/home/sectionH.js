import React, { useEffect, useState } from 'react';

import images from '../../constants/images';
import api from '../../api';

const SectionH = () => {


    const [data, setData] = useState({
        title: '',
        item: [
            {
                name: '',
                review: '',
                date: '',
            },

            {
                name: '',
                review: '',
                date: '',
            },

            {
                name: '',
                review: '',
                date: '',
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
        const isEmpty = () => {
            let res = false;
            if (data.title === '') { res = true };
            data.item.forEach(item => {
                if (item.name === '' || item.review === '' || item.date === '') { res = true };
            });
            return res;
        };

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            const formData = new FormData();
            formData.append('content', JSON.stringify(data));
            const res = await api.post('home/section-h', formData);
            if (res.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            };
        };
    }

    useEffect(() => {
        const secHData = JSON.parse(sessionStorage.getItem('homeApi')).sectionH;
        _data.title = secHData.heading;
        _data.item = secHData.content;
        updateData();
        console.log(secHData);
    }, []);

    return (<div className='section-h sec'>
        <h2>Section - H</h2>

        <div className='input-field'>
            <input
                id={'section-h-card-main-title'}
                type='text'
                className='validate'
                onChange={text => {
                    text = text.currentTarget.value;
                    _data.title = text;
                    updateData();
                }}
                value={data.title}
            />
            <label for={'section-h-card-main-title'}>Title</label>
        </div>

        <div className='add' onClick={() => {
            _data.item.push({ name: '', review: '', date: '' });
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
                                id={'section-h-card-title' + index}
                                type='text'
                                className='validate'
                                onChange={text => {
                                    text = encodeURIComponent(text.currentTarget.value);
                                    _data.item[index].name = text;
                                    updateData();
                                }}
                                value={decodeURIComponent(item.name)}
                            />
                            <label for={'section-h-card-title' + index}>Title</label>
                        </div>
                        <div className='input-field'>
                            <textarea
                                id={'section-h-card-content-' + index}
                                className='materialize-textarea'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    _data.item[index].review = text;
                                    updateData();
                                }}
                                value={item.review}
                            />
                            <label for={'section-h-card-content-' + index}>Content</label>
                        </div>
                        <div className='input-field'>
                            <input
                                id={'section-h-card-date' + index}
                                type='date'
                                className='validate'
                                onChange={text => {
                                    text = text.target.value;
                                    _data.item[index].date = text;
                                    updateData();
                                }}
                                value={item.date}
                            />
                            <label for={'section-h-card-date' + index}>Date</label>
                        </div>
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

export default SectionH;