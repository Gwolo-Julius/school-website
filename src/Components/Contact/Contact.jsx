import React from "react";
import "./Contact.css";
import message from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {

   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);

     formData.append("access_key", "31286bca-357f-4715-a206-dc0a3ad70660");

     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData,
     });

     const data = await response.json();

     if (data.success) {
       setResult("Your Message is Submitted Successfully!");
       event.target.reset();
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@julius.dev
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 123-345-6789
          </li>
          <li>
            <img src={location_icon} alt="" />
            88 Massachusetts Ave, Cambridge <br /> MA 02148, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <br />
          <label htmlFor="telephone">Phone:</label>
          <input
            type="telephone"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            type="textarea"
            name="message"
            rows={6}
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn form-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
