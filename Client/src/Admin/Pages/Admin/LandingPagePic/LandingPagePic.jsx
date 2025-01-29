import { useState } from "react";
import "./LandingPagePic.css";
import axios from "axios";
const LandingPagePic = () => {
  const [landingPic, setLandingPic] = useState([]);
  const upload = () => {
    if (landingPic.length < 0) {
      alert("Upload at least one pic");
    } else {
      // axios.post(url,landingPic);
      setLandingPic([]);
      alert("uploaded successfully");
    }
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setLandingPic((prev) => [...prev, ...imageUrls]);
  };
  return (
    <>
      <div>
        {landingPic.length > 0 && (
          <div style={{ display: "flex", gap: "15px" }}>
            {landingPic.map((img, index) => (
              <img className="Seeimg" key={index} src={img} alt="Uploaded" />
            ))}
          </div>
        )}
        <input
          className="Linputs"
          type="file"
          accept="/image"
          id="photos"
          onChange={handlePhotoChange}
          multiple
        />
      </div>
      <div>
        <button className="Lbtns" onClick={upload}>
          Upload
        </button>
      </div>
    </>
  );
};

export default LandingPagePic;
