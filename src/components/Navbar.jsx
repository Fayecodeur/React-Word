import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
