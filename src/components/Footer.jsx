import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo_part">
        <img src="/assets/logo.svg" alt="" />
        <p>Pre-School</p>
      </div>

      <div className="footer_info">
        <div>
          <span>
            <FaPhoneAlt />{" "}
          </span>
          <p>+92 333 3333333</p>
        </div>
        <div>
          <span>
            <MdEmail />
          </span>
          <p>preschool@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
