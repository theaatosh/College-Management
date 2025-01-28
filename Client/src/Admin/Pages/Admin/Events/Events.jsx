import { useState } from "react";

const Events = () => {
  const [eventsDescription, setEventsDescription] = useState("");
  const [eventsHeading, setEventsHeading] = useState("");
  const [eventsPhoto, setEventsPhoto] = useState([]);
  const add = (e) => {
    e.preventDefault();
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
            //   onChange={handlePhotoChange}
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
