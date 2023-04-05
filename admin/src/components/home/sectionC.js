import React, { useState, useEffect } from 'react';
import api from '../../api';
import MediaPicker from '../mediaePicker';

const SectionB = () => {

    const [data, setData] = useState({
        featureVideo: {
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
        }))
    };

    const handleImageChange = (file, image) => {
        _data.featureVideo.image = image;
        _data.featureVideo.file = file;
        _data.featureVideo.status = 'updated';

        setData(data => ({
            ...data,
            ..._data,
        }));
    };

    const handleSave = async () => {
        if (data.title !== '' && data.content !== '') {
            const formData = new FormData();
            if (data.featureVideo.status === 'updated') {
                formData.append('media', data.featureVideo.file);
            };

            formData.append('content', JSON.stringify({ title: data.title, content: data.content }));
            const res = await api.post('home/section-c', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }
        } else {
            window.M.toast({ html: 'Please fill the all values' });
        }
    };

    useEffect(() => {
        const secCData = JSON.parse(sessionStorage.getItem('homeApi')).sectionC;
        console.log(secCData);
        _data.title = secCData.heading;
        _data.content = secCData.content;
        _data.featureVideo.image = secCData.media;
        updateData();
    }, []);

    return (<div className='sec section-a section-c'>
        <h2>Section - C</h2>
        <main>
            <section>
                <MediaPicker
                    text='Feature video'
                    type='video'
                    onChange={handleImageChange}
                    source={data.featureVideo.image}
                />
            </section>
            <section>
                <div className='input-field'>
                    <input
                        id='section-c-title'
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
                    <label for='section-c-title'>Title</label>
                </div>
                <div className='input-field'>
                    <textarea
                        id='section-c-content'
                        className='materialize-textarea'
                        onChange={text => {
                            text = text.currentTarget.value;
                            _data.content = text;
                            setData(data => ({
                                ...data,
                                ..._data,
                            }))
                        }}
                        value={data.content}
                    ></textarea>
                    <label for='section-c-content'>Content</label>
                </div>
            </section>
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionB;