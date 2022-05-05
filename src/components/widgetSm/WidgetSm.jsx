import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {  useState } from "react";
import { userRows } from "../../data";

export default function WidgetSm() {

  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        {userRows.map((user) => (
          <li className="widget-sm-list-item" key={user.id}>
            <img
              src={user.img || "https://i.ibb.co/1Rbwz5K/user.png"}
              alt=""
              className="widget-sm-img"
            />
            <div className="widget-sm-user">
              <span className="widget-sm-username">{user.username}</span>
              {/* <span className="widget-sm-usertitle">{user.jobtitle}</span> */}
            </div>
            <button className="widget-sm-btn">
              <Visibility className="widget-sm-icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
