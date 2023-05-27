const con = require('../../conaction');

module.exports = (req, res) => {
    con.query('SELECT * FROM sitecontactus', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            const parsedResult = result.map(item => {
                return {
                    ...item,
                    createddate: new Date(item.createddate + 'Z').toISOString().split('T')[0]
                };
            });
            res.status(200).json(parsedResult);
        }
    });
};
