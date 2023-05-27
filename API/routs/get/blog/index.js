const admin = require("./admin");

module.exports = (req, res) => {
    const { type } = req.params;
    if (type === 'admin') {
        admin(req, res);
    }
};