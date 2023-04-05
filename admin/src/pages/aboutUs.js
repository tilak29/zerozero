import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SideBar from '../components/sideBar';
import TextEditor from '../components/textEditor';
import MediaPicker from '../components/mediaePicker';

import api from '../api';

const AboutUs = () => {

    const [data, setData] = useState({
        featureImage: {
            status: 'none',
            image: '',
            file: '',
        },
        content: '',
        sectionAHtmlContent: '',
        sectionCVideo: { status: 'none', file: '', image: '' }
    });

    const _data = data;

    const handleSave = async () => {
        const formData = new FormData();
        const isEmpty = () => {
            let res = false;
            if (data.content === '' || data.sectionAHtmlContent === '') {
                res = true;
            };
            return res;
        };

        const Media = { featureImage: null, video: null, }

        if (data.featureImage.status === 'updated') {
            formData.append('media', data.featureImage.file);
        } else {
            Media.featureImage = data.featureImage.image;
        };

        if (data.sectionCVideo.status === 'updated') {
            formData.append('media', data.sectionCVideo.file);
        } else {
            Media.video = data.sectionCVideo.image;
        };

        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            formData.append('content', JSON.stringify({
                content: data.content,
                sectionAHtmlContent: data.sectionAHtmlContent,
                media: Media,
            }));

            const res = await api.post('/about-us', formData);
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
        let res = await api.get('/about-us');
        res = res.data;
        _data.content = res.content;
        _data.sectionAHtmlContent = res.sectionAHtmlContent;
        _data.featureImage.image = res.media.image;
        _data.sectionCVideo.image = res.media.video;
        updateData();
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (<div className='page about-us'>
        <SideBar />
        <div className='container'>
         
            <br />
            <div className='sec'>
                <MediaPicker
                    type='image'
                    onChange={(file, image) => {
                        _data.featureImage.file = file;
                        _data.featureImage.image = image;
                        _data.featureImage.status = 'updated';
                        updateData();
                    }}
                    source={data.featureImage.image}
                    text='photo1'
                />
            </div>

            <div className='sec about-content'>
                <h2>Content</h2>
                <TextEditor
                    onChange={text => {
                        _data.content = text;
                        updateData();
                    }}
                    value={data.content}
                />
            </div>

            <div className='sec card' style={{ padding: 10 }}>
                <h2>PHOTO2+HtmlContent</h2>
                <div className="input-field col s12">
                    <textarea id="about_html_content" className="materialize-textarea" style={{ height: 200, resize: 'none' }}
                        onChange={text => {
                            text = text.currentTarget.value;
                            _data.sectionAHtmlContent = text;
                            updateData();
                        }}
                        value={data.sectionAHtmlContent}
                    />
                    <label for="about_html_content" style={{ left: 0, width: '100%' }}>HTML Content</label>
                </div>
            </div>
            
            <div className='sec'>
                <h2>Video</h2>
                <MediaPicker
                    text='Video'
                    type='video'
                    onChange={(file, image) => {
                        _data.sectionCVideo = { file, image, status: 'updated' };
                        updateData();
                    }}
                    source={data.sectionCVideo.image}
                />
            </div>
            <button className='btn save' onClick={handleSave}>save</button>
        </div>
    </div>);
}

export default AboutUs;