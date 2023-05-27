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

   
    con.query(`update products set heading = '${(btoa(content.title))}', content = '${btoa(content.content)}' where section_id=${2}`);
 

    res.status(200).send({ status });
};

module.exports = sectionA;

