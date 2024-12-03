import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="subSection contactUs">
      {/* Remaining Content */}

      <form>
        <h1 className="heroHeading textCenter">Contact Us</h1>
        <div className="form_input_wrapper">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Maan Mansoor"
            required
          />
        </div>
        <div className="form_input_wrapper">
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="+92 333 3333333"
            required
          />
        </div>
        <div className="form_input_wrapper">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="form_button_wrapper">
          <button type="submit">Send</button>
        </div>
      </form>

      {/* Social Links */}
      {/* <div className="right_image">
        <img src="/assets/gallery2.jpg" alt="" />
      </div> */}
    </section>
  );
};

export default Contact;
