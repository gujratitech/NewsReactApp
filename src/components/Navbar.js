import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" href="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/business" className="nav-link">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/entertainment" className="nav-link">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/general" className="nav-link">
                General
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/health" className="nav-link">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/science" className="nav-link">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sports" className="nav-link">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/technology" className="nav-link">
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nature" className="nav-link">
                Nature
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
