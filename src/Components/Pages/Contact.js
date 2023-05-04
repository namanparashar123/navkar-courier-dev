import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <h1 className="intro">Say hello!</h1>
      <p className="contact_content">
        Weather you are a customer, driver or a potential client, please reach out if you have any questions or feedback for us! We take feedback very seriously and are devoted to make the process easier for everybody.
      </p>
      <form className="mainForm" action="" onSubmit="">
        <div className="formWord">
          <input
            className="input100"
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
          />
          <br />
          <input
            className="input100"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <br />
          <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <br />
        </div>
        <div className="formMessage">
          <textarea
            className="input100"
            name="message"
            placeholder="Your Message..."
            required
          ></textarea>
          <br />
          <button className="submitBtn">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
