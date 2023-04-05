import React, { useEffect, useState } from 'react';

import MediaPicker from '../mediaePicker';
import api from '../../api';

const SectionA = () => {

    const [data, setData] = useState({
        featureImage: {
            image: '',
            file: '',
            status: 'none',
        },
        title: '',
        content: '',
    });

    const _data = data;

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data,
        }));
    }

    const handleImageChange = (file, image) => {
        _data.featureImage.image = image;
        _data.featureImage.file = file;
        _data.featureImage.status = 'updated';

        setData(data => ({
            ...data,
            ..._data,
        }));
    };

    const handleSave = async () => {

        const formData = new FormData();


        if (data.featureImage.status === 'updated') {
            formData.append('media', data.featureImage.file);
        };

        if (data.title !== '' && data.content !== '') {
            formData.append('content', JSON.stringify({ title: data.title, content: data.content }));

            const res = await api.post('home/section-a', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }
        } else {
            alert('Please fill all values');
        }
    };

    useEffect(() => {
        const secAData = JSON.parse(sessionStorage.getItem('homeApi')).sectionA;
        console.log(secAData);
        _data.featureImage = { image: secAData.media };
        _data.title = secAData.heading;
        _data.content = secAData.content;
        updateData();
    }, []);

    return (<div className='sec section-a'>
        <h2>Section - A</h2>
        <main>
            <section>
                <MediaPicker
                    text='Feature image'
                    type='image'
                    onChange={handleImageChange}
                    source={data.featureImage.image}
                />
            </section>
            <section>
                <div className='input-field'>
                    <input
                        id='section-a-title'
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
                    <label for='section-a-title'>Title</label>
                </div>
                <div className='input-field'>
                    <textarea
                        id='section-a-content'
                        className='materialize-textarea'
                        onChange={text => {
                            text = text.currentTarget.value;
                            _data.content = text;
                            setData(data => ({
                                ...data,
                                ..._data,
                            }));
                        }}
                        value={data.content}
                    ></textarea>
                    <label for='section-a-content'>Content</label>
                </div>
            </section>
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionA;