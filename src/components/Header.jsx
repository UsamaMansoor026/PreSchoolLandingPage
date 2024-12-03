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

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("activeLink");
            setActiveLink(id);
            document
              .querySelector("nav ul li a[href*=" + id + "]")
              .classList.add("activeLink");
          });
        }
      });
    };
  }, []);

  return (
    <>
      <header className="headerPadding flexCol">
        <nav className="flexRow justify-between">
          <img src="/assets/logo.svg" alt="" />
          <ul className="flexRow">
            <li
              className={`${activeLink === "home" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("home")}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${activeLink === "about" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("about")}
            >
              <a href="#about">About Us</a>
            </li>
            <li
              className={`${activeLink === "courses" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("courses")}
            >
              <a href="#courses">Courses</a>
            </li>
            <li
              className={`${activeLink === "teachers" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("teachers")}
            >
              <a href="#teachers">Our Teachers</a>
            </li>
            <li
              className={`${activeLink === "contact" ? "activeLink" : ""}`}
              onClick={() => setActiveLink("contact")}
            >
              <a href="#contact">Contact Us</a>
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
            <li
              className={`${activeLink === "home" ? "activeLink" : ""}`}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                setActiveLink("home");
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`${activeLink === "about" ? "activeLink" : ""}`}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                setActiveLink("about");
              }}
            >
              <a href="#about">About Us</a>
            </li>
            <li
              className={`${activeLink === "courses" ? "activeLink" : ""}`}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                setActiveLink("courses");
              }}
            >
              <a href="#courses">Courses</a>
            </li>
            <li
              className={`${activeLink === "teachers" ? "activeLink" : ""}`}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                setActiveLink("teachers");
              }}
            >
              <a href="#teachers">Our Teachers</a>
            </li>
            <li
              className={`${activeLink === "contact" ? "activeLink" : ""}`}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                setActiveLink("contact");
              }}
            >
              <a href="#contact">Contact Us</a>
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
