'use client';
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Welcome to my portfolio! Iwould love to hear from you. Whether you have a project in mind, 
        want to collaborate, or just want to say hello, feel free to reach out.
      </p>
      {submitted ? (
        <p className="text-green-600">Thank you for your message!</p>
      ) : (
        <form className="max-w-lg mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />
          <button className="bg-gray-600 text-white py-3 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
