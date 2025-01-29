import "./LandingPagePic.css";
const LandingPagePic = () => {
  return (
    <>
      <div>
        <input className="Linputs"
          type="file"
          accept="/image"
          id="photos"
          // onChange={handlePhotoChange}
          multiple
        />
      </div>
      <div>
        <button className="Lbtns">Upload</button>
      </div>
    </>
  );
};

export default LandingPagePic;
