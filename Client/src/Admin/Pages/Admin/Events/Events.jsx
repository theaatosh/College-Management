import axios from "axios";
import { useState } from "react";

const Events = () => {
  const [eventsDescription, setEventsDescription] = useState("");
  const [eventsHeading, setEventsHeading] = useState("");
  const [eventsSubHeading, setEventsSubHeading] = useState("");
  const [eventsPhoto, setEventsPhoto] = useState([]);

  const add = async (e) => {
    e.preventDefault();
    if (
      eventsDescription.length < 10 ||
      eventsHeading.length < 10 ||
      eventsSubHeading.length < 10 ||
      eventsPhoto.length === 0
    ) {
      return alert("fill all the fields");
    }
    const formdata = new FormData();
    formdata.append("eventsDescription", eventsDescription);
    formdata.append("eventsHeading", eventsHeading);
    formdata.append("eventsSubHeading", eventsSubHeading);
    // eventsPhoto.forEach(({ file }) => {
    //   // console.log(photo);
    //   formdata.append("eventPhotos", file);
    // });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/events/create",
        formdata,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        alert("Achievement added successfully !");
      } else {
        alert("Something went wrong !");
      }
    } catch (err) {
      console.log(err.message);
    }
    // setEventsDescription("");
    // setEventsHeading("");
    // setEventsPhoto([]);
    // setEventsSubHeading("");
    // alert("succesfully added");
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    // setEventsPhoto((prev) => [...prev, ...imageUrls]);
    setEventsPhoto((prev) => [
      ...prev,
      ...files.map((file, index) => ({
        file: file, // The actual file object
        previewUrl: imageUrls[index], // The URL for preview
      })),
    ]);
  };
  return (
    <>
      <form onSubmit={add}>
        <div className="achvImg">
          <label htmlFor="">Insert Image Here</label>
          {eventsPhoto.length > 0 && (
            <div style={{ display: "flex", gap: "15px" }}>
              {eventsPhoto.map(({ previewUrl }, index) => (
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
            value={eventsHeading}
            onChange={(e) => setEventsHeading(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder=" Sub Heading"
            className="achvHDesc"
            value={eventsSubHeading}
            onChange={(e) => setEventsSubHeading(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="achvDesc"
            value={eventsDescription}
            onChange={(e) => setEventsDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="achvBtn" type="submit" onClick={add}>
          Add
        </button>
      </form>
    </>
  );
};

export default Events;
