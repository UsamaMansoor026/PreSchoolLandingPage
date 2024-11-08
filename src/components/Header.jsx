import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const [showSignupPopUp, setShowSignUpPopUp] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleFormVisibility = () => {
    setShowLoginPopUp(false);
    setShowSignUpPopUp(false);
  };

  /* Tracking the Windows Width */
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 968) {
        setShowMobileNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <header className="headerPadding flexCol">
        <nav className="flexRow justify-between">
          <img src="/assets/logo.svg" alt="" />
          <ul className="flexRow">
            <li
              className={`${activeLink === "Home" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("Home")}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${activeLink === "About" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("About")}
            >
              <a href="#">About Us</a>
            </li>
            <li
              className={`${activeLink === "Courses" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("Courses")}
            >
              <a href="#">Courses</a>
            </li>
            <li
              className={`${activeLink === "Teachers" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("Teachers")}
            >
              <a href="#">Our Teachers</a>
            </li>
            <li
              className={`${activeLink === "Faq" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("Faq")}
            >
              <a href="#">FAQ</a>
            </li>
          </ul>

          <div className="flexRow btnContainer">
            <button>Contact Us</button>
            <button type="button" onClick={() => setShowLoginPopUp(true)}>
              Login
            </button>
            {/* Hamburger Menu only visible to small screens */}
            <div
              className="hamburgerMenu"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              {showMobileNav ? (
                <IoMdClose size={26} color="#ff0066" />
              ) : (
                <IoMdMenu size={26} color="#ff0066" />
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Nav */}
        {showMobileNav && (
          <ul className="mobileNav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Our Teachers</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <button type="button" className="conTactUsBtn">
                Contact Us
              </button>
            </li>
          </ul>
        )}
      </header>

      {showLoginPopUp && (
        <div className="popupWrapper">
          <Login
            handleVisibility={handleFormVisibility}
            showSignupform={setShowSignUpPopUp}
          />
        </div>
      )}
      {showSignupPopUp && (
        <div className="popupWrapper">
          <Signup
            handleVisibility={handleFormVisibility}
            showLoginform={setShowLoginPopUp}
          />
        </div>
      )}
    </>
  );
};

export default Header;
