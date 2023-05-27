const mysql = require('mysql');

module.exports  = mysql.createConnection({
    host: 'keshroot-unitdb.crcodkqyjkbx.ap-south-1.rds.amazonaws.com',
    user: 'keshroot',
    password: 'KeshRoot#2023',
    database: 'zerozero_Local',
});

// module.exports = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'keshroot',
// });

// export default con;