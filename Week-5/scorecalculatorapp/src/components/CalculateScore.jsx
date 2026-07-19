import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore() {
  const studentName = "pavan";
  const mark1 = 83;
  const mark2 = 95;
  const mark3 = 79;

  const total = mark1 + mark2 + mark3;
  const average = total / 3;

  return (
    <div className="container">
      <h1>Score Calculator</h1>

      <h2>Student Name: {studentName}</h2>

      <p>Mark 1: {mark1}</p>
      <p>Mark 2: {mark2}</p>
      <p>Mark 3: {mark3}</p>

      <h3>Total Marks: {total}</h3>
      <h3>Average Marks: {average.toFixed(2)}</h3>
    </div>
  );
}

export default CalculateScore;