const con = require('../../conaction');

const changePassword = (req, res) => {
    const { password, _id } = req.body;
    con.query(`update admin_users set password='${password}' where _id=${_id}`);
    res.send({ status: 200 })
};

module.exports = changePassword;