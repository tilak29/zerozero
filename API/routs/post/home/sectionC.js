const upload = require('../../../upload');
const con = require('../../../conaction');

const sectionC = async (req, res) => {
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
    const _medias = [];

    let mediaIndex = 0;

    content.content.forEach(item => {
        dbContent.push(item.url);
        if (item.image !== undefined) {
            _medias.push(item.image);
        } else {
            _medias.push('http://localhost:8000/media/' + mediaName[mediaIndex]);
            mediaIndex++;
        }
    });

    // console.log(_medias, dbContent);

    con.query(`update pages set heading = '${btoa(content.title)}', content = '${btoa(JSON.stringify(dbContent))}', media = '${JSON.stringify(_medias)}' where _id=${31}`);

    res.status(200).send({ status });
};

module.exports = sectionC;