const con = require('../../conaction');

module.exports = (req, res) => {
    con.query(`select * from admin_users`, (err, result) => {
        res.send(result);
    });
}