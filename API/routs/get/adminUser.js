const con = require('../../conaction');

module.exports = (req, res) => {
    const { username, password } = req.params;
    con.query(`select * from admin_users where username='${username}'`, (err, result) => {
        result = result[0];
        let passwordMatch = null;
        if (result) {
            passwordMatch = result.password === password;
        };

        if (result && passwordMatch) {
            res.send({
                status: 200, data: result
            });
        } else if (result && !passwordMatch) {
            res.send({ status: 501 });
        } else {
            res.send({ status: 500 });
        };
    });
}