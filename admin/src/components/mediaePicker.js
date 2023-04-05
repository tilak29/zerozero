import React, { useState } from 'react';
import uid from 'harsh-uid';

import images from '../constants/images';

const MediaPicker = ({ classsName, type = 'image', source, onChange, multiple, text, Delete, onDelete }) => {

    const id = uid();

    const [err, setErr] = useState(null);

    return (<div className='media-picker card'>
        <input
            type='file'
            style={{ display: 'none' }}
            id={id}
            accept={type === 'image' ? 'image/*' : type === 'video' ? 'video/*' : 'image/*,  video/*'}
            onChange={(file) => {
                const _type = file.currentTarget.files[0].type.split('/')[0];
                if (type === 'media') {
                    if (_type === 'image' || _type === 'video') {
                        onChange(file.currentTarget.files[0], URL.createObjectURL(file.currentTarget.files[0]));
                        setErr(null);
                    } else {
                        setErr('file is not image or video');
                    }
                } else if (type === 'image') {
                    if (_type === 'image') {
                        onChange(file.currentTarget.files[0], URL.createObjectURL(file.currentTarget.files[0]));
                        setErr(null);
                    } else {
                        setErr('file is not image');
                    }
                } else if (type === 'video') {
                    if (_type === 'video') {
                        onChange(file.currentTarget.files[0], URL.createObjectURL(file.currentTarget.files[0]));
                        setErr(null);
                    } else {
                        setErr('file is not video');
                    }
                }
            }}
            multiple={multiple}
        />
        <label for={id} className={classsName}>
            {
                type === 'image' || !source ? (
                    <img src={!source ? images.pick2 : source} className={!source ? 'opacity' : null} />
                ) : (
                    <video controls>
                        <source src={source} />
                    </video>
                )
            }
            {text && (<span>{text}</span>)}
        </label>
        {Delete && (
            <button className='btn' onClick={onDelete}>Remove</button>
        )}
        {err && (<div className='err'>{err}</div>)}
    </div>);
}

export default MediaPicker;