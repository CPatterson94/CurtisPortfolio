import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init({
        publicKey: "Dlcub_ZD0rUYNYgcI",
      });
    };
    document.body.appendChild(script);

    const handleSubmit = (event) => {
      event.preventDefault();
      emailjs.sendForm("contact_service", "contact_form", event.target).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    };

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form id="contact-form">
        <input type="hidden" name="contact_number" value="697483" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
