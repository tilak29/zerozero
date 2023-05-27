const addBlog = require('./add');
const edit = require('./edit');
const editBlog = require('./edit');

const blog = (req, res) => {
    const { page } = req.params;
    if (page === 'add') {
        addBlog(req, res);
    } else if (page === 'edit') {
        editBlog(req, res);
    }
};

module.exports = blog;