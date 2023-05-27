const con = require('../../conaction');

module.exports = (req, res) => {
    con.query('select * from pages where website="keshroot" && page="contact-us"', (err, result) => {
        result = result[0];
        const content = JSON.parse(atob(result.content));
        // console.log(content)
        const data = {
            title: content.title,
            description: content.description,
            titleb: content.titleb,
            address: content.address,
            email: content.email,
            phone: content.phone,
            whatsapp: content.whatsapp,
            titlec: content.titlec,
            titled: content.titled,
            weblablea: content.weblablea,
            linka: content.linka,
            weblableb: content.weblableb,
            linkb: content.linkb,
        };
        res.send(data);
    })
}