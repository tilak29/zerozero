const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionB = async (req, res) => {
    let status = 200;
    let mediaName = null;

    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
        mediaName = res.mediaName;
    };

    let { content } = req.body;

    content = JSON.parse(content);

    const dbContent = [];
    const _media = [];
    let mediaIndex = 0;
 
    content.content.forEach(item => {
        dbContent.push(item.url);
        if (item.image !== undefined) {
            _media.push(item.image);
        } else {
            _media.push('http://localhost:8000/media/' + mediaName[mediaIndex]);
            mediaIndex++;
        }
    });
    con.query(`update pages set heading = '${btoa(content.title)}', content = '${btoa(JSON.stringify(dbContent))}', media = '${JSON.stringify(_media)}' where _id=${30}`);


    res.status(200).send({ status });
};

module.exports = sectionB;