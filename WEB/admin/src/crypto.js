import CryptoJS from 'crypto-js';

const key = process.env.REACT_APP_CRYPTO_KEY;

export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, key).toString();
};

export const decrypt = (data) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
};