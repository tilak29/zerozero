const con = require('../../../conaction');
const upload = require('../../../upload');

module.exports = async (req, res) => {
    let status = 200;
    if (req.files) {
        const res = await upload(req.files);
        status = res.status;
    };
    let { content } = req.body;
    content = JSON.parse(content);

    const currentDate = new Date().toISOString().split('T')[0];
    con.query(`insert into sitecontactus (firstname, lastname, email, mobilenumber, subject, message, createddate) values('${(content.firstname)}', '${(content.lastname)}', '${(content.email)}', '${(content.phonenumber)}', '${(content.subject)}', '${content.message}', '${currentDate}')`)
    res.send({ status });
}