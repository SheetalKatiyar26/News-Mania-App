import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = (props) => {
  const handleCall = (searchValue) => {
    props.SearchTerm(searchValue);
    console.log("searchValueNew", searchValue);
    // searchValue.preventDefault();
  };

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "70%",
                  position: "absolute",
                  left: "40%",
                  top: "17%",
                }}
              >
                <Link to="/search">
                  <Search searchCall={handleCall} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
