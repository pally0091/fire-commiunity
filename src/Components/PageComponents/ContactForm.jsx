/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert(`${formData.firstName} your message was sent`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-[90%] mx-auto">
      <form
        className="bg-white p-6 shadow-md text-left rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-600 font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full p-2 border rounded-md"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-600 font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full p-2 border rounded-md"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-600 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="w-full p-2 border rounded-md"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-600 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 border rounded-md"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#FF6F61] text-white w-full px-4 py-2 rounded-xl hover:bg-[#fd9187]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
