import Image from "next/image";
import Form from 'next/form'
import huskybgi from "../public/husky.png";
import "./authscreen.css";

export default function AuthScreen() {
  return (
    <div className="container">
      <h2 className="moto">Bringing Families together</h2>
      <div className="main">
        <main className="auth-container">
          <h2>Login / SignUp</h2>
          <Form action="/search"> {/*//? This actions will need to be a function to auth and redirect on success //*/}
            <h3>Please enter username and email for login or signup</h3>
            <div className="inputs">
              <label htmlFor="username">username</label>
              <input id="username" name="username" />
              <label htmlFor="email">email</label>
              <input id="email" name="email" />
            </div>
            <button type="submit">Submit</button>
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
