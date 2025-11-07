// src/components/Student.js
import React from "react";

const Student = (props) => {
  return (
    <div
      style={{
        border: "2px solid #888",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h3>{props.name}</h3>
      <p>🎓 Course: {props.course}</p>
      <p>📊 Marks: {props.marks}</p>
    </div>
  );
};

export default Student;
