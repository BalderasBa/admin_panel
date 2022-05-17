import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import userpng from "../../assets/user.png";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topleft">
          <Link to="/admin_panel/">
            <span className="logo">Admin Dashboard</span>
          </Link>
        </div>
        <div className="topright">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img src={userpng} alt="" className="top-avatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
