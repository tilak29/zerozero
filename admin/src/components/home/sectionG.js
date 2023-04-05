import React, { useEffect, useState } from 'react';

import api from '../../api';

const SectionG = () => {

    const [data, setData] = useState({
        title: '',
        videos: [{ url: '' }, { url: '' }, { url: '' }, { url: '' }],
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

        const isEmpty = () => {
            let res = false;
            if (data.title === '') { res = true };
            data.videos.forEach(item => {
                if (item.url == '') {
                    res = true;
                }
            });
            return res;
        }

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            formData.append('content', JSON.stringify(data));
            const res = await api.post('home/section-g', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }
        }
    };

    useEffect(() => {
        const secGData = JSON.parse(sessionStorage.getItem('homeApi')).sectionG;
        _data.title = secGData.heading;
        _data.videos = secGData.media;
        updateData();
        console.log(secGData);
    }, []);

    return (<div className='sec section-e section-g'>
        <h2>Section - G</h2>
        <main>
            <div className='input-field'>
                <input
                    id='section-g-title'
                    type='text'
                    className='validate'
                    onChange={text => {
                        text = text.currentTarget.value;
                        const _data = data;
                        _data.title = text;
                        setData(data => ({
                            ...data,
                            ..._data,
                        }));
                    }}
                    value={data.title}
                />
                <label for='section-g-title'>Title</label>
            </div>
            <div className='videos card'>
                <h3>YouTube videos</h3>
                {
                    data.videos.map((item, index) => (
                        <div className='input-field'>
                            <input
                                id={'section-g-video-' + index}
                                type='text'
                                className='validate'
                                onChange={text => {
                                    text = text.currentTarget.value;
                                    const _data = data;
                                    _data.videos[index].url = text;
                                    setData(data => ({
                                        ...data,
                                        ..._data,
                                    }));
                                }}
                                value={data.videos[index].url}
                            />
                            <label for={'section-g-video-' + index}>Video URL</label>
                        </div>
                    ))
                }
            </div>
        </main>
        <button className='save btn' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionG;