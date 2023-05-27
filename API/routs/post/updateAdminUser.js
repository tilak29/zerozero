const con = require('../../conaction');

const updateAdminUser = (req, res) => {
    const { firstname, lastname, username, role, password, _id } = req.body;

    const data = {
        first_name: firstname,
        last_name: lastname,
        username,
        password,
        role,
    };

    // con.query(`insert into admin_users (first_name, last_name, username, role, password) values('${fullname}', '${lastname}', '${username}', '${role}', '${password}')`)
    con.query(`update admin_users set ? where _id=${_id}`, data);
    res.send({ status: 200 });
};

module.exports = updateAdminUser;