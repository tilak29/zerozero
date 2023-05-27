


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SideBar from '../components/sideBar';
import TextEditor from '../components/textEditor';
import MediaPicker from '../components/mediaePicker';

import api from '../api';

const AddBlogPost = () => {

    const navigate = useNavigate();

    const { postId } = useParams();

    const [data, setData] = useState({
        featureImage: { image: '', file: '', status: 'none' },
        title: '',
        description: '',
        permalink: '',
        content: '',
        author: '',
    });
    const [buttonText, setButtonText] = useState('Save to draft');

    const _data = data;

    const getBlogPost = async () => {
        if (postId) {
            let res = await api.get('blog-post/' + postId);
            res = res.data.data;
            _data.title = res.title;
            _data.description = res.description;
            _data.author = res.author;
            _data.permalink = res.permalink;
            _data.status = res.status;
            _data.content = res.content;
            _data.featureImage.image = res.feature_image;
            updateData();
            if (res.status === 'published') {
                setButtonText('Revert to draft');
            }
        };
    }

    useEffect(() => {
        getBlogPost();
    }, []);

    const updateData = () => {
        setData(data => ({
            ...data,
            ..._data,
        }));
    };

    const handleSave = async (status) => {
        const isEmpty = () => {
            let res = false;
            if (data.title === '' || data.content === '' || data.author === '' || data.featureImage.image === '') {
                res = true;
            };
            return res;
        };
        if (isEmpty()) {
            window.M.toast({ html: 'Please fill the all values' });
        } else {
            const formData = new FormData();
            let featureImage = null;
            if (data.featureImage.status === 'updated') {
                formData.append('media', data.featureImage.file);
            } else {
                featureImage = data.featureImage.image;
            };
            formData.append('content', JSON.stringify({
                content: data.content,
                title: data.title,
                description: data.description,
                author: data.author,
                featureImage,
                permalink: data.permalink,
                status,
            }));

            let res = null;
            if (!postId) {
                res = await api.post('blog/add', formData);
            } else {
                res = await api.post('blog/edit/' + postId, formData);
            }

            if (res.data.status === 200) {
                window.M.toast({ html: 'Data saved successfully' });
                setTimeout(() => {
                    navigate('/blog', { replace: true });
                }, 1000);
            }
        };
    }

    return (<div className='page add-blog-post'>
        <SideBar />
        <div className='container'>
            <h2>Add blog post</h2>
            <main>
                <div className='top'>
                    <div className='btns'>
                        <button className='btn' onClick={() => handleSave(handleSave('draft'))}>{buttonText}</button>
                        <button className='btn' onClick={() => handleSave('published')}>Publish</button>
                    </div>
                </div>
                <section>
                    <TextEditor
                        onChange={text => {
                            _data.content = text;
                            updateData();
                        }}
                        value={data.content}
                    />
                    <div className='right-side'>
                        <div className='sec'>
                            <div className='input-field'>
                                <input id='title' type='text' className='validate'
                                    onChange={text => {
                                        text = text.currentTarget.value;
                                        _data.title = text;
                                        updateData();
                                    }}
                                    value={data.title}
                                />
                                <label for='title'>Title</label>
                            </div>
                        </div>
                        <div className='sec'>
                            <div className='input-field'>
                                <textarea id='description' className='materialize-textarea' style={{ height: 200 }}
                                    onChange={text => {
                                        text = text.currentTarget.value;
                                        _data.description = text;
                                        updateData();
                                    }}
                                    value={data.description}
                                />
                                <label for='description'>Description</label>
                            </div>
                        </div>
                        <div className='sec'>
                        <MediaPicker
                            text='Feature image'
                            onChange={(file, image) => {
                                _data.featureImage = { file, image, status: 'updated' };
                                updateData();
                            }}
                            type='image'
                            source={data.featureImage.image}
                        />
                    </div>
                        <div className='sec'>
                            <div className='input-field'>
                                <input id='permalink' type='text' className='validate'
                                    onChange={text => {
                                        text = text.currentTarget.value;
                                        _data.permalink = text.replaceAll(' ', '-');
                                        updateData();
                                    }}
                                    value={data.permalink}
                                />
                                <label for='permalink'>Permalink</label>
                            </div>
                        </div>
                        <div className='sec'>
                            <div className='input-field'>
                                <input id='author' type='text' className='validate'
                                    onChange={text => {
                                        text = text.currentTarget.value;
                                        _data.author = text;
                                        updateData();
                                    }}
                                    value={data.author}
                                />
                                <label for='author'>Author</label>
                            </div>
                        </div>
                      
                    </div>
                </section>
            </main>
        </div>
    </div>);
}

export default AddBlogPost;
