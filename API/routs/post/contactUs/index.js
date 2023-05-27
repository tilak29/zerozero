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

  const dbContent = {
    title: content.title,
    description: content.description,
    titleb: content.titleb,
    address: content.address,
    email: content.email,
    phone: content.phone,
    titlec: content.titlec,
    whatsapp: content.whatsapp,
    titled: content.titled,
    weblablea: content.weblablea,
    linka: content.linka,
    weblableb: content.weblableb,
    linkb: content.linkb,
  };

  con.query(`UPDATE pages SET content = '${btoa(JSON.stringify(dbContent))}' where section_id = 11`);
  res.send({ status });
}