const upload = require('../../upload');
const con = require('../../conaction');

const linkE = async (req, res) => {
    const name = req.body.name;
    const link = req.body.link; 

    const sqlInsert = "INSERT INTO socialmedia (heading, content) VALUES(?,?)"
    con.query(sqlInsert, [name, link], (err,result) => {
        console.log(err);
        // console.log(result);
    })
};

module.exports = linkE;