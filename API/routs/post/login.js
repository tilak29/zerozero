const con = require('../../conaction');

const login = (req, res) => {
    const { username, password } = req.body;
    con.query(`select * from users where username = ? && password = ?`, [username, password], (err, result) => {
        if (result.length === 0) {
            res.send({ status: 500 })
        } else {
            res.send({ status: 200, userData: result });
        }
    })
};

module.exports = login;