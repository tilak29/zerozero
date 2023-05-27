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
          
        </main>
        <button className='btn save' onClick={handleSave}>Save</button>
    </div>);
}

export default SectionA;


// import React from 'react';
// import { useEffect, useState } from 'react';
// import MediaPicker from '../mediaePicker';
// import api from '../../api';

// const SectionA = () => {

//     const [data, setData] = useState({
//         image1: {image: '', file: '', status: 'none', },
//         // image2: {image: '', file: '', status: 'none', },
//     });

//     const _data = data;

//     const updateData = () => {
//         setData(data => ({
//             ...data,
//             ..._data,
//         }));
//     }
//     const handleSave = async () => {
//         const formData = new FormData();
//         const isEmpty = () => {
//             let res = false;
//             if (data.image1 === '' ) { 
//                 res = true;
//             };
//             return res;
//         };

//         const Media = { image1: null}

//         if (data.image1.status === 'updated') {
//             formData.append('media', data.image1.file);
//             // formData.append('media', data.image2.file);
//         } else {
//             Media.image1 = data.image1.image;
//             // Media.image2 = data.image2.image;
//         };


//         if (isEmpty()) {
//             window.M.toast({ html: 'Please fill the all values' });
//         } else {
//             formData.append('content', JSON.stringify({
//                 media: Media,
//             }));

//             const res = await api.post('homeApi', formData);
//             if (res.data.status === 200) {
//                 window.M.toast({ html: 'Data saved successfully' });
//             }
//         }
//     };



//     const getApiData = async () => {
//         let res = await api.get('/homeApi');
//         res = res.data;
//         _data.image1.image = res.media.image;
//         // _data.image2.image = res.media.image;
//         updateData();
//     }

//     useEffect(() => {
//         getApiData();
//     }, [])

//     return (<div className='sectionA2'>

// <div className='SectionA2'>

//            <h2>Section A</h2>
//             <br />
//             <div className='sec'>
//                 <MediaPicker
//                     type='image'
//                     onChange={(file, image) => {
//                         _data.image1.file = file;
//                         _data.image1.image = image;
//                         _data.image1.status = 'updated';
//                         updateData();
//                     }}
//                     source={data.image1.image}
//                     text='image1'
//                 />
                
//                {/*} <MediaPicker
//                     type='image'
//                     onChange={(file, image) => {
//                         _data.image2.file = file;
//                         _data.image2.image = image;
//                         _data.image2.status = 'updated';
//                         updateData();
//                     }}
//                     source={data.image2.image}
//                     text='image2'
//                 /> */}
                
                
//             <button className='btn save' onClick={handleSave}>save</button>
        

//             </div>
//             </div>
//     </div>);
// }
// export default SectionA;