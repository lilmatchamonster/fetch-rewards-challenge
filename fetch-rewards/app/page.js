"use client"

import Image from "next/image";
import Form from 'next/form'
import { useState } from "react";
import { submitForm, getBreeds } from "./helpers";
import huskybgi from "../public/husky.png";
import "./authscreen.css";

export default function AuthScreen() {
  const [ formData, setFormData ] = useState({ name: "", email: "" })

  const handleChange = (e) => {
    const name =  e.target.name;
    const value =  e.target.value;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await submitForm(formData);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="moto">Bringing Families together</h2>
      <div className="main">
        <main className="auth-container">
          <h2>Login / SignUp</h2>
          <Form action={handleSubmit}>
            <h3>Please enter username and email for login or signup</h3>
            <div className="inputs">
              <label htmlFor="name">username</label>
              <input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
              />
              <label htmlFor="email">email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={getBreeds}>Get Breeds</button>
          </Form>
        </main>
        <footer className={"footer"}>
          © 2025 Vercel, Inc.
        </footer> 
      </div>
      <Image className="bgm" src={huskybgi} alt="husky"/>
    </div>
  );
}
