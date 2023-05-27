const con = require("../../../conaction");

const admin = async (req, res) => {
  let blogPosts = [];

  con.query("select * from blog", (err, result) => {
    blogPosts = result;
    result.forEach((item, index) => {
      blogPosts[index] = {
        _id: item._id,
        title: atob(item.title),
        description: atob(item.description),
        author: atob(item.author),
        status: item.status,
        feature_image: item.feature_image,
        created_at: item.created_at,
        permalink: atob(item.permalink),
      };
    });
    res.send({ status: 200, data: blogPosts });
  });
};

module.exports = admin;
