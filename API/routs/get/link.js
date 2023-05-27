const con = require('../../conaction');

const linkGet = async (req, res) => {

      
        const sqlSelect = "SELECT * FROM socialmedia";
        con.query(sqlSelect, (err, result) => {
            console.log(err);
            console.log(result);
            res.send(result);
        });

 
};

module.exports = linkGet;