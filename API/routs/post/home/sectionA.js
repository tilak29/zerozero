const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionA = async (req, res) => {
    let status = 200;
    let mediaName = null;

    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
        mediaName = res.mediaName;
    };

    let { content } = req.body;

    content = JSON.parse(content);

    let _id = null;

    if (mediaName) {
        con.query(`update pages set heading = '${btoa(content.title)}', content = '${btoa(content.content)}', media = 'http://localhost:8000/media/${mediaName[0]}' where _id=${_id || 29}`);
    } else {
        con.query(`update pages set heading = '${btoa(content.title)}', content = '${btoa(content.content)}' where _id=${_id || 29}`);
    }

    res.status(200).send({ status });
};

module.exports = sectionA;