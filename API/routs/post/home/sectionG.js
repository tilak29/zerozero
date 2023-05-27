const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionG = async (req, res) => {
    let status = 200;

    let { content } = req.body;

    content = JSON.parse(content);

    let _id = null;

    con.query(`update pages set heading = '${btoa(content.title)}', media = '${btoa(JSON.stringify(content.videos))}' where _id=${_id || 35}`);

    res.status(200).send({ status });
};

module.exports = sectionG;