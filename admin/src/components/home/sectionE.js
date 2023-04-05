import React, { useEffect, useState } from 'react';
import api from '../../api';

const SectionE = () => {

    const [data, setData] = useState({
        title: '',
        videos: [{ url: '' }, { url: '' }, { url: '' }],
    });

    const _data = data;

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data,
        }))
    }

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
            const res = await api.post('home/section-e', formData);
            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
            } else {
                window.M.toast({ html: 'Something went wrong' });
            }
        }
    };

    useEffect(() => {
        const secEData = JSON.parse(sessionStorage.getItem('homeApi')).sectionE;
        _data.title = secEData.heading;
        _data.videos = secEData.media;
        updateData();
        console.log(secEData);
    }, []);

    return (<div className='sec section-e'>
        <h2>Section - E</h2>
        <main>
            <div className='input-field'>
                <input
                    id='section-e-title'
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
                <label for='section-e-title'>Title</label>
            </div>
            <div className='videos card'>
                <h3>YouTube videos</h3>
                {
                    data.videos.map((item, index) => (
                        <div className='input-field'>
                            <input
                                id={'section-e-video-' + index}
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
                            <label for={'section-e-video-' + index}>Video URL</label>
                        </div>
                    ))
                }
            </div>
        </main>
        <button className='save btn' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionE;