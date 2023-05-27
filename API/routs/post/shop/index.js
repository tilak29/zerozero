const slider = require('./ShopSlider');
const sectionA = require('./sectionA');
const sectionB = require('./sectionB');
const sectionC = require('./sectionC');
const sectionD = require('./sectionD');
const sectionE = require('./sectionE');
const sectionF = require('./sectionF');


const shop = async (req, res) => {

    const pages = Object.freeze({
        slider: () => slider(req, res),
        sectionA: () => sectionA(req, res),
        sectionB: () => sectionB(req, res),
        sectionC: () => sectionC(req, res),
        sectionD: () => sectionD(req, res),   
        sectionE: () => sectionE(req, res),   
        sectionF: () => sectionF(req, res),   
    });

    const { page } = req.params;

    if (page === 'ShopSlider') {
        pages.slider();
    } else if (page === 'sectionA') {
        pages.sectionA();
    } else if (page === 'sectionB') {
        pages.sectionB();
    } else if (page === 'sectionC') {
        pages.sectionC();
    } else if (page === 'sectionD') {
        pages.sectionE();
    } else if (page === 'sectionE') {
        pages.sectionE();
    } else if (page === 'sectionF') {
        pages.sectionF();
    } 

};

module.exports = shop;