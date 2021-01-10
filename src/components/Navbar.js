import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="nav-logo">
          <NavLink
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <h1>My Next Anime</h1>
          </NavLink>
        </div>
      </div>
      <div className="right">
        <ul className="h-list">
          <li className="list-item">
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login/Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
