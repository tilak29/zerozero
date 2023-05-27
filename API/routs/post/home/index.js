const slider = require('./slider');
const sectionA = require('./sectionA');
const sectionB = require('./sectionB');
const sectionC = require('./sectionC');
const sectionE = require('./sectionE');
const sectionF = require('./sectionF');
const sectionG = require('./sectionG');
const sectionH = require('./sectionH');
const sectionD = require('./sectionD');

const home = async (req, res) => {

    const pages = Object.freeze({
        slider: () => slider(req, res),
        sectionA: () => sectionA(req, res),
        sectionB: () => sectionB(req, res),
        sectionC: () => sectionC(req, res),
        sectionE: () => sectionE(req, res),
        sectionF: () => sectionF(req, res),
        sectionG: () => sectionG(req, res),
        sectionH: () => sectionH(req, res),
        sectionD: () => sectionD(req, res),
    });

    const { page } = req.params;

    if (page === 'slider') {
        pages.slider();
    } else if (page === 'section-a') {
        pages.sectionA();
    } else if (page === 'section-b') {
        pages.sectionB();
    } else if (page === 'section-c') {
        pages.sectionC();
    } else if (page === 'section-e') {
        pages.sectionE();
    } else if (page === 'section-f') {
        pages.sectionF();
    } else if (page === 'section-g') {
        pages.sectionG();
    } else if (page === 'section-h') {
        pages.sectionH();
    } else if (page === 'section-d') {
        pages.sectionD();
    }

};

module.exports = home;