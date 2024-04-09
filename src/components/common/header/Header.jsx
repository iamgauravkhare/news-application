import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {/* <Head /> */}
      <header>
        <div id="paddingCustom" className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar((prev) => !prev)}
            >
              <li>
                <GiHamburgerMenu style={{ fontSize: "25px" }} />
              </li>
              {/* <li>
                <FaSearch style={{ fontSize: "20px" }} />
              </li> */}
              <li>
                <Link to="/">House of Commons Latest</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Comment</Link>
              </li>
              <li>
                <Link to="/">Campaigns</Link>
              </li>
              <li>
                <Link to="/">Reference</Link>
              </li>
              <li>
                <Link to="/">Subscribe</Link>
              </li>
              <li className="head-side">
                <FaSearch style={{ fontSize: "20px" }} />
                {/* <img
                  src="/images/Politics_logo_01-scaled.jpg"
                  alt=""
                  style={{ height: "30px", mixBlendMode: "screen" }}
                /> */}
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
