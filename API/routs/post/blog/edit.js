const upload = require("../../../upload");
const con = require("../../../conaction");

module.exports = async (req, res) => {
  const { postId } = req.params;

  let status = 200;
  let featureImageName = null;

  if (req.files) {
    const res = await upload(req.files);
    status = res.status;
    featureImageName = res.mediaName[0];
  }

  let { content } = req.body;
  content = JSON.parse(content);

  if (content.featureImageName === null) {
    content.featureImage = "http://localhost:8000/media/" + featureImageName;
  }

  con.query(
    `update blog set title='${btoa(content.title)}', description='${btoa(
      content.description
    )}', author='${btoa(content.author)}', permalink='${btoa(
      content.permalink
    )}', feature_image='${
      content.featureImage === null
        ? "http://localhost:8000/media/" + featureImageName
        : content.featureImage
    }', content='${btoa(content.content)}', status='${
      content.status
    }' where _id=${postId}`
  );

  res.send({ status });
};
