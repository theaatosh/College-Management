import { useState } from "react";
import "./Notices.css";
import axios from "axios";
const Notices = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const add = async (e) => {
    e.preventDefault();
    if (heading.length < 10 || description.length < 10) {
      alert("please fill all the fields");
    } else {
      let formdata = new FormData();
      formdata.append("heading", heading);
      formdata.append("description", description);
      try {
        const res = await axios.post(
          "http://localhost:3000/api/notices/create",
          formdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data.message);
        if (res.status === 200) {
          alert("Notice added successfully");
        } else {
          alert("Error occured while adding notice");
        }
      } catch (err) {
        console.log(err);
      }
      setDescription("");
      setHeading("");
    }
  };
  return (
    <div className="check">
      <form onSubmit={add}>
        <textarea
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="heading"
        />
        <textarea
          type="text"
          placeholder="Description"
          className="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="noticeBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Notices;
