const upload = require('../../../upload');
const con = require('../../../conaction');

const slider = async (req, res) => {
    
    let status = 200;
    let mediaName = null;

    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
        mediaName = res.mediaName;
    };

    let { content } = req.body;
    content = JSON.parse(content);

    let mediaIndex = 0;

    content.forEach((item, index) => {
        if (item.image === null) {
            content[index].image = 'http://localhost:8000/media/' + mediaName[mediaIndex];
            mediaIndex++;
        }
    });
    const qry = `update products set media = '${JSON.stringify((content))}' where section_id=${1}`;
    console.log(qry);
    con.query(qry);

    res.status(200).send({ status });
};

module.exports = slider;