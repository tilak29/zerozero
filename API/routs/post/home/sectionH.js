const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionH = async (req, res) => {
    let status = 200;

    let { content } = req.body;

    content = JSON.parse(content);

    con.query(`update pages set heading = '${btoa(content.title)}', content = '${btoa(JSON.stringify(content.item))}' where _id=${36}`);

    res.status(200).send({ status });
};

module.exports = sectionH;