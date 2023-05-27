const con = require('../../conaction');

const createAdminUser = (req, res) => {
    const { firstname, lastname, username, role, password } = req.body;

    const data = {
        first_name: firstname,
        last_name: lastname,
        username,
        password,
        role,
    };

    // con.query(`insert into admin_users (first_name, last_name, username, role, password) values('${fullname}', '${lastname}', '${username}', '${role}', '${password}')`)
    con.query(`insert into admin_users set ?`, data);
    res.send({ status: 200 })
};

module.exports = createAdminUser;