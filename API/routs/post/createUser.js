const { uid } = require('uid');

const con = require('../../conaction');

const createUser = async (req, res) => {
    const { username, password, email } = req.body;

    const dbData = {
        username,
        password,
        email,
        uid: uid(30),
    };

    con.query(`select * from users where username = ?`, username, (err, result) => {
        if (result.length !== 0) {
            res.send({ status: 500, message: 'Username not avaible', field: 'username' });
        } else {
            con.query(`select * from users where email = ?`, email, (err, result) => {
                if (result.length !== 0) {
                    res.send({ status: 500, message: 'Email already used in onether account', field: 'emailID' });
                } else {
                    res.send({ status: 200, userData: dbData });
                }
            })
        }
    })
};

module.exports = createUser;