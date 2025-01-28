import "./AdminLayout.css";
import { GrHomeRounded } from "react-icons/gr";
import { TiPin } from "react-icons/ti";
import { GrTrophy } from "react-icons/gr";
import { BsCalendar2Day } from "react-icons/bs";
import { AiTwotonePicture } from "react-icons/ai";

import logo from "../../../../public/Images/Logo.png";
import { NavLink, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <div className="mainDiv">
        <div>
          <img src={logo} alt="nmc" />
        </div>
        <div className="adminList">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div>
              <span>
                <GrHomeRounded />
              </span>
              Dashboard
            </div>
          </NavLink>
          <NavLink
            to="/admin/noticess"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div>
              <span>
                <TiPin />
              </span>
              Notices
            </div>
          </NavLink>

          <NavLink
            to="/admin/achievements"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div>
              <span>
                <GrTrophy />
              </span>
              Achievements
            </div>
          </NavLink>

          <NavLink
            to="/admin/events"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div>
              <span>
                <BsCalendar2Day />
              </span>
              Events
            </div>
          </NavLink>

          <NavLink
            to="/admin/landingPagePicture"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div>
              <span>
                <AiTwotonePicture />
              </span>
              Landing Page Picture
            </div>
          </NavLink>
        </div>
        <div className="comp">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
