import { useState } from "react";
import "./Achievements.css";
import axios from "axios";
const Achievements = () => {
  const [acheivementDescription, setAcheivementDescription] = useState("");
  const [acheivementHeading, setAcheivementHeading] = useState("");
  const [acheivementSubHeading, setAcheivementSubHeading] = useState("");
  const [photos, setPhotos] = useState([]);
  const add = async (e) => {
    e.preventDefault();
    if (
      acheivementHeading.length < 10 ||
      acheivementSubHeading.length < 10 ||
      acheivementDescription.length < 10 ||
      photos.length === 0
    ) {
      // setAcheivementDescription("");
      // setAcheivementHeading("");
      // setPhotos([]);
      // setAcheivementSubHeading("");
      alert("please fill all the fields");
    } else {
      // setAcheivementDescription("");
      // setAcheivementHeading("");
      // setPhotos([]);
      // setAcheivementSubHeading("");
      const formdata = new FormData();
      photos.forEach((photo) => {
        formdata.append("photos", photo);
      });
      formdata.append("acheivementDescription", acheivementDescription);
      formdata.append("acheivementHeading", acheivementHeading);
      formdata.append("acheivementSubHeading", acheivementSubHeading);
      try {
        const res = await axios.post(
          "http://localhost:3000/api/achievements/create",
          {
            formdata,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.status === 200) {
          alert("Achievement added successfully !");
        } else {
          alert("Something went wrong !");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPhotos((prev) => [...prev, ...imageUrls]);
  };
  return (
    <>
      <form onSubmit={add}>
        <div className="achvImg">
          <label htmlFor="">Insert Image Here</label>
          {photos.length > 0 && (
            <div style={{ display: "flex", gap: "15px" }}>
              {photos.map((img, index) => (
                <img className="Seeimg" key={index} src={img} alt="Uploaded" />
              ))}
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="photos"
            onChange={handlePhotoChange}
            multiple
          />
        </div>
        <div>
          <textarea
            placeholder="Heading"
            className="achvHDesc"
            value={acheivementHeading}
            onChange={(e) => setAcheivementHeading(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Sub Heading"
            className="achvHDesc"
            value={acheivementSubHeading}
            onChange={(e) => setAcheivementSubHeading(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="achvDesc"
            value={acheivementDescription}
            onChange={(e) => setAcheivementDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="achvBtn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Achievements;
