import api from '../api';

const callHomeApi = () => {
    return new Promise((resolve, reject) => {
        api.get('/home')
            .then(res => {
                sessionStorage.setItem('homeApi', JSON.stringify(res.data));
                resolve(res.data);
            })
    })
};

export default callHomeApi;