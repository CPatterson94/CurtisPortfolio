import { useState } from "react";
import emailjs from "emailjs-com";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // your emailjs service ID, template ID, and Public Key
    const serviceId = "default_service";
    const templateId = "template_dq8qlhu";
    const publicKey = "Dlcub_ZD0rUYNYgcI";
    // Setting up the Params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Daniel",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email...", error);
      });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-labels">Your Name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-labels">Your Email:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-labels">Message:</label>
        <textarea
          className="form-control"
          cols="30"
          rows="10"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
