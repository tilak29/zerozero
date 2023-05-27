import React, { useEffect, useState } from "react";

import images from "../../constants/images";
import api from "../../api";

const SectionD = () => {
  const [data, setData] = useState({
    title: "",
    item: [
      {
        name: "",
        content: "",
      },
    ],
  });

  const _data = data;

  const updateData = () => {
    setData((data) => ({
      ...data,
      ..._data,
    }));
  };

  const handleSave = async () => {
    const isEmpty = () => {
      let res = false;
      if (data.title === "") {
        res = true;
      }
      data.item.forEach((item) => {
        if (item.name === "" || item.content === "") {
          res = true;
        }
      });
      return res;
    };

    if (isEmpty()) {
      window.M.toast({ html: "Please fill the all values" });
    } else {
      const formData = new FormData();
      formData.append("content", JSON.stringify(data));
      const res = await api.post("home/section-d", formData);
      if (res.status === 200) {
        window.M.toast({ html: "Data saved successfully" });
      }
    }
  };

  useEffect(() => {
    const secDData = JSON.parse(sessionStorage.getItem("homeApi")).sectionD;
    _data.title = secDData.heading;
    _data.item = secDData.content;
    updateData();
    console.log(secDData);
  }, []);

  return (
    <div className="section-h sec">
      <h2>Section - D</h2>

      <div className="input-field">
        <input
          id={"section-e-card-main-title"}
          type="text"
          className="validate"
          onChange={(text) => {
            text = text.currentTarget.value;
            _data.title = text;
            updateData();
          }}
          value={data.title}
        />
        <label for={"section-e-card-main-title"}>Title</label>
      </div>

      <div
        className="add"
        onClick={() => {
          _data.item.push({ name: "", review: "" });
          updateData();
        }}
      >
        <img src={images.pick2} />
      </div>

      <main>
        {data.item.map((item, index) => (
          <div className="card">
            <div className="input-field">
              <input
                id={"section-e-card-title" + index}
                type="text"
                className="validate"
                onChange={(text) => {
                  text = encodeURIComponent(text.currentTarget.value);
                  _data.item[index].name = text;
                  updateData();
                }}
                value={decodeURIComponent(item.name)}
              />
              <label for={"section-e-card-title" + index}>Title</label>
            </div>
            <div className="input-field">
              <textarea
                id={"section-e-card-content-" + index}
                className="materialize-textarea"
                onChange={(text) => {
                  text = text.currentTarget.value;
                  _data.item[index].review = text;
                  updateData();
                }}
                value={item.review}
              />
              <label for={"section-e-card-content-" + index}>Content</label>
            </div>

            <button
              className="btn"
              onClick={() => {
                const newArray = _data.item.filter(
                  (item) => _data.item.indexOf(item) !== index
                );
                _data.item = newArray;
                updateData();
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </main>
      <button className="btn save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SectionD;
