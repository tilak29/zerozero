const con = require("../../../conaction");

const userBlogPost = async (req, res) => {
  const { permalink } = req.params;

  console.log(permalink);

  con.query(
    `select * from blog where permalink='${btoa(
      permalink
    )}' && status='published'`,
    (err, result) => {
      if (result.length > 0) {
        const item = result[0];

        const blogPost = {
          _id: item._id,
          title: atob(item.title),
          description: atob(item.description),
          author: atob(item.author),
          status: item.status,
          feature_image: item.feature_image,
          created_at: item.created_at,
          permalink: atob(item.permalink),
          content: atob(item.content),
        };
        res.send({ status: 200, data: blogPost });
      } else {
        res.send({ status: 500 });
      }
    }
  );
};

module.exports = userBlogPost;
