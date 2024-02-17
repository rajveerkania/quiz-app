import React, { useState } from "react";
import video1 from "../assets/question1.mp4";
import image1 from "../assets/1_a.png";
import image2 from "../assets/1_b.png";
import image3 from "../assets/1_c.png";
import image4 from "../assets/1_d.png";
import "../styles/Test.css";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState(null);

  function onSelect(option) {
    setSelectedOption(option);
    console.log("Option selected:", option);
  }

  function handleSubmit() {
    console.log("Submitting selected option:", selectedOption);
  }

  return (
    <>
      <div className="main">
        <div className="video">
          <video src={video1} autoPlay loop muted></video>
        </div>

        <div className="card-container">
          <div
            className={`card ${selectedOption === 1 ? "selected" : ""}`}
            onClick={() => onSelect(1)}
            onKeyDown={() => onSelect(1)}
            role="button"
            tabIndex={0}
          >
            <img src={image1} alt="Question 1 Option a"></img>
            <div className="card-content">
              <label className="text-primary">
                Mention that it's difficult to find out now since you have
                changed your location
              </label>
            </div>
          </div>

          <div
            className={`card ${selectedOption === 2 ? "selected" : ""}`}
            onClick={() => onSelect(2)}
            onKeyDown={() => onSelect(2)}
            role="button"
            tabIndex={0}
          >
            <img src={image2} alt="Question 1 Option b"></img>
            <div className="card-content">
              <label className="text-primary">
                Tell that you don't remember getting any such book from your
                teacher
              </label>
            </div>
          </div>

          <div
            className={`card ${selectedOption === 3 ? "selected" : ""}`}
            onClick={() => onSelect(3)}
            onKeyDown={() => onSelect(3)}
            role="button"
            tabIndex={0}
          >
            <img src={image3} alt="Question 1 Option c"></img>
            <div className="card-content">
              <label className="text-primary">
                Accept receiving the book & intimate that you have donated the
                book to a poor student
              </label>
            </div>
          </div>

          <div
            className={`card ${selectedOption === 4 ? "selected" : ""}`}
            onClick={() => onSelect(4)}
            onKeyDown={() => onSelect(4)}
            role="button"
            tabIndex={0}
          >
            <img src={image4} alt="Question 1 Option d"></img>
            <div className="card-content">
              <label className="text-primary">
                Inform that your friend has lost the book
              </label>
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
