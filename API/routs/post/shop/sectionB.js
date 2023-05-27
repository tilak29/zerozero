const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionB = async (req, res) => {
    let status = 200;
    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
    };

    let { content } = req.body;

    content = JSON.parse(content);

    let _id = null;

    con.query(`update products set content = '${btoa(content.content)}' where section_id=${3}`);

    res.status(200).send({ status });
};

module.exports = sectionB;