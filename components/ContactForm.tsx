'use client';
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simple mailto link approach - opens user's email client
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:racheluwera9@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink);
    
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Contact Me</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        I would love to hear from you! Whether you have a project in mind, 
        want to collaborate, or just want to say hello, feel free to reach out.
      </p>
      
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg max-w-lg mx-auto">
          Thank you! Your email client should open with the message ready to send.
        </div>
      )}

      <form className="max-w-lg mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 focus:outline-none transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 focus:outline-none transition"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 focus:outline-none transition"
          required
        />
        <button 
          type="submit"
          className="bg-gradient-to-r from-gray-600 to-gray-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition"
        >
          Send Message
        </button>
      </form>
      
      <div className="mt-8 text-gray-600">
        <p>Or reach me directly at: <span className="font-semibold">racheluwera9@example.com</span></p>
      </div>
    </section>
  );
}