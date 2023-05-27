const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionE = async (req, res) => {
    let status = 200;

    let { content } = req.body;

    content = JSON.parse(content);

    let _id = null;

    con.query(`update products set content = '${btoa(content.content)}' where section_id=${5}`);

    res.status(200).send({ status });
};

module.exports = sectionE;