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
      eventsSubHeading < 10 ||
      eventsPhoto < 0
    ) {
      return alert("fill all the fields");
    }
    const formdata = new FormData();
    formdata.append("eventsDescription".eventsDescription);
    formdata.append("eventsHeading", eventsHeading);
    formdata.append("eventsSubHeading", eventsSubHeading);
    eventsPhoto.forEach((photo) => {
      formdata.append("eventPhotos", photo);
    });
    try {
      const res = await axios.post("http://localhost:3000/api/events", {
        formdata,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        alert("Achievement added successfully !");
      } else {
        alert("Something went wrong !");
      }
    } catch (err) {
      console.log(err);
    }
    setEventsDescription("");
    setEventsHeading("");
    setEventsPhoto([]);
    setEventsSubHeading("");
    alert("succesfully added");
  };
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setEventsPhoto((prev) => [...prev, ...imageUrls]);
  };
  return (
    <>
      <form onSubmit={add}>
        <div className="achvImg">
          <label htmlFor="">Insert Image Here</label>
          {eventsPhoto.length > 0 && (
            <div style={{ display: "flex", gap: "15px" }}>
              {eventsPhoto.map((img, index) => (
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
        <button className="achvBtn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Events;
