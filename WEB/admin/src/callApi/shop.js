import api from '../api';

const callShopApi = () => {
    return new Promise((resolve, reject) => {
        api.get('/shop')
            .then(res => {
                sessionStorage.setItem('shopApi', JSON.stringify(res.data));
                resolve(res.data);
            })
    })
};

export default callShopApi;