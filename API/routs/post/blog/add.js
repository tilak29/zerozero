const upload = require("../../../upload");
const con = require("../../../conaction");

module.exports = async (req, res) => {
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
    `insert into blog (title, description, author, permalink, feature_image, content, status) values('${btoa(
      content.title
    )}', '${btoa(content.description)}', '${btoa(content.author)}', '${btoa(
      content.permalink
    )}', '${
      content.featureImage === null
        ? "http://localhost:8000/media/" + featureImageName
        : content.featureImage
    }', '${btoa(content.content)}', '${content.status}')`
  );

  res.send({ status });
};
