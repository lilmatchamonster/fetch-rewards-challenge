"use client"

import Image from "next/image";
import Form from 'next/form'
import { useState } from "react";
import { submitForm, getBreeds } from "../helpers";
import huskybgi from "../public/husky.png";
import styles from "./page.module.css";

export default function AuthScreen() {
  const [ formData, setFormData ] = useState({ name: "", email: "" })

  const handleChange = (e) => {
    const name =  e.target.name;
    const value =  e.target.value;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await submitForm(formData);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.moto}>Bringing Families together</h2>
      <div className={styles.main}>
        <main className={styles.authContainer}>
          <h2>Login / SignUp</h2>
          <Form className={styles.form} action={handleSubmit}>
            <h3>Please enter username and email for login or signup</h3>
            <div className={styles.inputs}>
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
          </Form>
            <button onClick={getBreeds}>Get Breeds</button>
        </main>
        <footer className={styles.footer}>
          © 2025 Vercel, Inc.
        </footer> 
      </div>
      <Image className={styles.bgm} src={huskybgi} alt="husky"/>
    </div>
  );
}
