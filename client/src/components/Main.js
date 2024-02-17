import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {
  // inorder to get user-input value from the input-box

  const usernameRev = useRef(null);

  return (
    <div className="container">
      <h1 className="title dark-light">Personality Test</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>Each question has four options. You can choose only one option.</li>
        <li>You can review and change your options before submitting.</li>
      </ol>

      <form id="form">
        <input
          ref={usernameRev}
          type="text"
          className="userid"
          placeholder="Username*"
        ></input>
      </form>

      <div className="start">
        <Link className="btn" to={"Test"}>
          Login
        </Link>
      </div>
    </div>
  );
}
