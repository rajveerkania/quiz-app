import React from "react";
import Question from "./Questions";
import "../styles/Test.css";

export default function Test() {
  function onNext() {
    console.log("Clicked on next");
  }

  function onPrev() {
    console.log("Clicked on prev");
  }

  return (
    <>
      {/* Questions */}
      <Question></Question>

      {/* <div className="container">
        <div className="grid">
          <button className="btn prev" onClick={onPrev}>
            Previous
          </button>
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        </div>
      </div> */}
    </>
  );
}
