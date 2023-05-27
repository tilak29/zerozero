
const con = require('../../../conaction');
const upload = require('../../../upload');

module.exports = async (req, res) => {

    let status = 200;
    let mediaName = null;

    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
        mediaName = res.mediaName;
    };

    let { content } = req.body;
    content = JSON.parse(content);

    const myMedia = {
        image: content.media.featureImage,
        video: content.media.video,
    };

    if (content.media.featureImage === null && content.media.video === null) {
        myMedia.image = 'http://localhost:8000/media/' + mediaName[0];
        myMedia.video = 'http://localhost:8000/media/' + mediaName[1];
    } else if (content.media.featureImage === null) {
        myMedia.image = 'http://localhost:8000/media/' + mediaName[0];
    } else if (content.media.video === null) {
        myMedia.video = 'http://localhost:8000/media/' + mediaName[0];
    };

    const dbContent = { content: content.content, sectionAHtmlContent: content.sectionAHtmlContent, };

    // console.log(JSON.stringify(({ content: content.content, sectionAHtmlContent: content.sectionAHtmlContent })));

    console.log(JSON.stringify(dbContent));

    con.query(`update pages set content='${btoa(JSON.stringify(dbContent))}', media='${btoa(JSON.stringify(myMedia))}' where section_id = 10`)

    res.send({ status });
}