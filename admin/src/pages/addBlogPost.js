import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar";
import TextEditor from "../components/textEditor";
import MediaPicker from "../components/mediaePicker";
import api from "../api";

const AddBlogPost = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const [data, setData] = useState({
    title: "",
    description: "",
    content1: "",
    featureImage: { image: "", file: "", status: "none" },
    content2: "",
    featureImage2: { image: "", file: "", status: "none" },
    content3: "",
    featureImage3: { image: "", file: "", status: "none" },
    content4: "",
    featureImage4: { image: "", file: "", status: "none" },
    content5: "",
    content6: "",
    permalink: "",
    author: "",
});

  const [buttonText, setButtonText] = useState("Save to draft");

  const _data = data;

  const getBlogPost = async () => {
    if (postId) {
      let res = await api.get("blog-post/" + postId);
      res = res.data.data;
      _data.title = res.title;
      _data.description = res.description;
      _data.content1 = res.content1;
      _data.featureImage.image = res.feature_image;
      _data.content2 = res.content2;
      _data.featureImage2.image = res.feature_image2;
      _data.content3 = res.content3;
      _data.content4 = res.content4;
      _data.featureImage3.image = res.feature_image3;
      _data.content5 = res.content5;
      _data.featureImage4.image = res.feature_image4;
      _data.content6 = res.content6;
      _data.author = res.author;
      _data.permalink = res.permalink;
      _data.status = res.status;

      updateData();
      if (res.status === "published") {
        setButtonText("Revert to draft");
      }
    }
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  const updateData = () => {
    setData((data) => ({
      ...data,
      ..._data,
    }));
  };

  const handleSave = async (status) => {
    const isEmpty = () => {
      let res = false;
      if (
        data.title === "" ||
        data.content1 === "" ||
        data.featureImage.image === "" ||
        data.content2 === "" ||
        data.featureImage2.image === "" ||
        data.content3 === "" ||
        data.content4 === "" ||
        data.featureImage3.image === "" ||
        data.content5 === "" ||
        data.featureImage4.image === "" ||
        data.content6 === "" ||
        data.author === ""
      ) {
        res = true;
      }
      return res;
    };
    if (isEmpty()) {
      window.M.toast({ html: "Please fill the all values" });
    } else {
      const formData = new FormData();
      let featureImage = null;
      if (data.featureImage.status === "updated") {
        formData.append("media", data.featureImage.file);
      } else {
        featureImage = data.featureImage.image;
      }
           
const featureImage2 = "path/to/featureImage2.jpg";
const featureImage3 = "path/to/featureImage3.jpg";
const featureImage4 = "path/to/featureImage4.jpg";

 
      formData.append(
        "content",
        JSON.stringify({
          title: data.title,
          description: data.description,
          content1: data.content1,
          featureImage,
          content2: data.content2,
          featureImage2,
          content3: data.content3,
          content4: data.content4,
          featureImage3,
          content5: data.content5,
          featureImage4,
          content6: data.content6,
          author: data.author,

          permalink: data.permalink,
          status,
        })
      );

      let res = null;
      if (!postId) {
        res = await api.post("blog/add", formData);
      } else {
        res = await api.post("blog/edit/" + postId, formData);
      }

      if (res.data.status === 200) {
        window.M.toast({ html: "Data saved successfully" });
        setTimeout(() => {
          navigate("/blog", { replace: true });
        }, 1000);
      }
    }
  };

  return (
    <div className="page add-blog-post">
      <SideBar />
      <div className="container">
        <h2>Add blog post</h2>
        <main>
          <div className="top">
            <div className="btns">
              <button
                className="btn"
                onClick={() => handleSave(handleSave("draft"))}
              >
                {buttonText}
              </button>
              <button className="btn" onClick={() => handleSave("published")}>
                Publish
              </button>
            </div>
          </div>

          <div>
            <div className="sectionA">
              <h5 >Section-A</h5>
              <div>
                <div className="input-field">
                  <input
                    id="title"
                    type="text"
                    className="validate"
                    onChange={(text) => {
                      text = text.currentTarget.value;
                      _data.title = text;
                      updateData();
                    }}
                    value={data.title}
                  />
                  <label className="validate" for="title">
                    Title
                  </label>
                </div>
              </div>
              <div>
                <div className="input-field">
                  <textarea
                    id="description"
                    className="materialize-textarea validate "
                    style={{ height: 100 }}
                    onChange={(text) => {
                      text = text.currentTarget.value;
                      _data.description = text;
                      updateData();
                    }}
                    value={data.description}
                  />
                  <label className="validate" for="description">
                    Description
                  </label>
                </div>
              </div>
              <div className="cnt">
                <h5>Content1</h5>
                <TextEditor
                  onChange={(text) => {
                    _data.content1 = text;
                    updateData();
                  }}
                  value={data.content1}
                />
              </div>
              <div className="img1">
                <MediaPicker
                  text="Feature image"
                  onChange={(file, image) => {
                    _data.featureImage = { file, image, status: "updated" };
                    updateData();
                  }}
                  type="image"
                  source={data.featureImage.image}
                />
              </div>
              <div className="cnt">
                <h5>Content2</h5>
                <TextEditor
                  onChange={(text) => {
                    _data.content2 = text;
                    updateData();
                  }}
                  value={data.content2}
                />
              </div>
            </div>

            <div className="sectionB">
              <h5 >Section-B</h5>
              <div className="img2-cnt3">
                <div className="sec">
                  <MediaPicker
                    text="Feature image"
                    onChange={(file, image) => {
                      _data.featureImage2 = { file, image, status: "updated" };
                      updateData();
                    }}
                    type="image"
                    source={data.featureImage2.image}
                  />
                </div>
                <div>
                  <h5>Content3</h5>
                  <TextEditor
                    onChange={(text) => {
                      _data.content3 = text;
                      updateData();
                    }}
                    value={data.content3}
                  />
                </div>
              </div>

              <div className="cnt4-img3">
                <div>
                  <h5>Content4</h5>
                  <TextEditor
                    onChange={(text) => {
                      _data.content4 = text;
                      updateData();
                    }}
                    value={data.content4}
                  />
                </div>
                <div className="sec">
                  <MediaPicker
                    text="Feature image"
                    onChange={(file, image) => {
                      _data.featureImage3 = { file, image, status: "updated" };
                      updateData();
                    }}
                    type="image"
                    source={data.featureImage3.image}
                  />
                </div>
              </div>
              <div className="cnt5-img4">
                <div>
                  <h5>Content5</h5>
                  <TextEditor
                    onChange={(text) => {
                      _data.content5 = text;
                      updateData();
                    }}
                    value={data.content5}
                  />
                </div>
                <div className="sec">
                  <MediaPicker
                    text="Feature image"
                    onChange={(file, image) => {
                      _data.featureImage4 = { file, image, status: "updated" };
                      updateData();
                    }}
                    type="image"
                    source={data.featureImage4.image}
                  />
                </div>
              </div>
              <div className="cnt">
                <h5>Content6</h5>
                <TextEditor
                  onChange={(text) => {
                    _data.content6 = text;
                    updateData();
                  }}
                  value={data.content6}
                />
              </div>
            </div>

            <div className="sec">
              <div className="input-field">
                <input
                  id="permalink"
                  type="text"
                  className="validate"
                  onChange={(text) => {
                    text = text.currentTarget.value;
                    _data.permalink = text.replaceAll(" ", "-");
                    updateData();
                  }}
                  value={data.permalink}
                />
                <label className="validate" for="permalink">
                  Permalink
                </label>
              </div>
            </div>
            <div className="sec">
              <div className="input-field">
                <input
                  id="author"
                  type="text"
                  className="validate"
                  onChange={(text) => {
                    text = text.currentTarget.value;
                    _data.author = text;
                    updateData();
                  }}
                  value={data.author}
                />
                <label className="validate" for="author">
                  Author
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddBlogPost;
