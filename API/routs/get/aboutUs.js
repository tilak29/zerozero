const con = require('../../conaction');

module.exports = (req, res) => {
    con.query('select * from pages where website="keshroot" && page="about us"', (err, result) => {
        console.log(result);
        result = result[0];
        const content = JSON.parse(atob(result.content));
        const data = { 
            content: content.content,
            sectionAHtmlContent: content.sectionAHtmlContent,
            media: JSON.parse(atob(result.media))
        };
     
        res.send(data);
    })
}