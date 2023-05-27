const con = require('../../conaction');

module.exports = (req, res) => {
    const { id } = req.params;
    con.query(`select * from admin_users where _id = ${id}`, (err, result) => {
        result = result[0];
        res.send(result);
    });
}