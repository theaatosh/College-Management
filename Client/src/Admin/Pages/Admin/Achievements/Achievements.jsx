import { useState } from "react";
import "./Achievements.css";
const Achievements = () => {
  const [acheivementDescription, setAcheivementDescription] = useState("");
  const [acheivementHeading, setAcheivementHeading] = useState("");
  const [photos, setPhotos] = useState([]);
  const add = (e) => {
    console.log("hi");
    e.preventDefault();

    if (photos) {
      setAcheivementDescription("");
      setAcheivementHeading("");
      setPhotos([]);
      alert("Achievement added successfully!");
    }
  };
  const handlePhotoChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };
  return (
    <>
      <form onSubmit={add}>
        <div className="achvImg">
          <label htmlFor="">Insert Image Here</label>
          <input
            type="file"
            accept="/image"
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
