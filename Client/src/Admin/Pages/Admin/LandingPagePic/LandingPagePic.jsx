import { useState } from "react";
import "./LandingPagePic.css";
import axios from "axios";
const LandingPagePic = () => {
  const [landingPic, setLandingPic] = useState([]);
  const upload = async() => {
    if (landingPic.length < 0) {
      alert("Upload at least one pic");
    } else {
      const formdata = new FormData();
      landingPic.forEach(({ file }) => {
        formdata.append("landingPic", file);
      });
      const res =await axios.post(
        "http://localhost:3000/api/landing/create",
        formdata
      );
      if (res.status === 201) {
        alert("uploaded successfully");
        setLandingPic([]);
      } else {
        console.log(res);
        alert("Something went wrong");
      }
    }
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    // setLandingPic((prev) => [...prev, ...imageUrls]);
    setLandingPic((prev) => [
      ...prev,
      ...files.map((file, index) => ({
        file: file, // The actual file object
        previewUrl: imageUrls[index], // The URL for preview
      })),
    ]);
  };
  return (
    <>
      <div>
        {landingPic.length > 0 && (
          <div style={{ display: "flex", gap: "15px" }}>
            {landingPic.map(({ previewUrl }, index) => (
              <img
                className="Seeimg"
                key={index}
                src={previewUrl}
                alt="Uploaded"
              />
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
