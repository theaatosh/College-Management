import "./Dashboard.css";
import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [notices, setNotices] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [events, setEvents] = useState([]);
  const [landingImages, setLandingImages] = useState([]);
  const getNotices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/notices/fetch");
      const data = await response.json();
      setNotices(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAchievements = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/achievements/fetch"
      );
      const data = await response.json();
      setAchievements(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/events/fetch");
      const data = await response.json();
      setEvents(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getLandingImages = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/landing/fetch");
      const data = await response.json();
      setLandingImages(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAchievement = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/achievements/delete/${id}`
      );
      console.log(res);
      if (res.status == 200) {
        alert("Achievement Deleted Successfully");
        getAchievements();
      } else {
        alert("Failed to delete Achievement");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteNotice = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/notices/delete/${id}`
      );
      console.log(res);
      if (res.status == 200) {
        alert("Notice Deleted Successfully");
        getNotices();
      } else {
        alert("Failed to delete Notice");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteEvent = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/events/delete/${id}`
      );
      if (res.status == 200) {
        alert("Event Deleted Successfully");
        getEvents();
      } else {
        alert("Failed to delete Event");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletelandingImage = (id) => {
    console.log("deletelandingImage");
    // console.log("deletelandingImage");
    console.log(id);
    // try {
    //   const response = await fetch(`http://localhost:3000/api/landing/delete/${id}`);
    //   const data = await response.json();
    //   console.log(data);
    //   getLandingImages();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    getNotices();
    getAchievements();
    getEvents();
    getLandingImages();
  }, []);
  return (
    <>
      <div className="DasdBoardMainDiv">
        <div className="dashMainTopic">Notices</div>
        {notices.map((notice) => (
          <div className="noticeList" key={notice._id}>
            <div className="noticeListTitle">{notice.heading}</div>
            <div className="noticeListIcons">
              <div
                className="deleteIcon"
                onClick={() => deleteNotice(notice._id)}
              >
                <MdDelete />
              </div>
              {/* <div>
                <CiEdit />
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="DasdBoardMainDiv">
        <div className="dashMainTopic">Achievements</div>
        {achievements.map((achievement) => (
          <div className="noticeList" key={achievement._id}>
            <div className="noticeListTitle">{achievement.heading}</div>
            <div className="noticeListIcons">
              <div
                className="deleteIcon"
                onClick={() => deleteAchievement(achievement._id)}
              >
                <MdDelete />
              </div>
              {/* <div>
                <CiEdit />
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="DasdBoardMainDiv">
        <div className="dashMainTopic">Events</div>
        {events.map((event) => (
          <div className="noticeList" key={event._id}>
            <div className="noticeListTitle">{event.heading}</div>
            <div className="noticeListIcons">
              <div
                className="deleteIcon"
                onClick={() => deleteEvent(event._id)}
              >
                <MdDelete />
              </div>
              {/* <div>
                <CiEdit />
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="DasdBoardMainDiv">
        <div className="dashMainTopic">Landing Page Images</div>

        {landingImages.map((landingImage) => (
          <div className="landingPageImagesList" key={landingImage._id}>
            {landingImage.images.map((image) => (
              <div className="landingPageImages" key={image.public_id}>
                <img src={image.secure_url} alt="photo" />
              </div>
            ))}
            <div
              className="deleteIcon"
              key={landingImage._id}
              onClick={() => deletelandingImage(landingImage._id)}
            >
              <MdDelete />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
