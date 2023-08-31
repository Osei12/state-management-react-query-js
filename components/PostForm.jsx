"use client";
import React, { useState } from "react";

export default function PostForm({ onSubmit, InitialValue }) {
  const FORM_INITIAL_STATE = {
    title: InitialValue.title || "",
    body: InitialValue.body || "",
  };

  const [formData, setFormData] = useState(FORM_INITIAL_STATE);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(FORM_INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSumbit}>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <label> Title </label>
        <input
          value={formData.title}
          onChange={handleInputChange}
          className="border px-3 py-2 "
          type="text"
          name="title"
        />
      </div>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <label> Body </label>
        <input
          value={formData.body}
          onChange={handleInputChange}
          className="border px-3 py-2 "
          type="text"
          name="body"
        />
      </div>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <button className="w-full btn btn-primary" type="submit">
          Sumbit
        </button>
      </div>
    </form>
  );
}
