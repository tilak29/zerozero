const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionC = async (req, res) => {
    let status = 200;

    let { content } = req.body;

    content = JSON.parse(content);

    let _id = null;

    con.query(`update products set content = '${btoa(content.content)}' where section_id=${4}`);

    res.status(200).send({ status });
};

module.exports = sectionC;