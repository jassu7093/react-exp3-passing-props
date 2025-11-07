// src/components/StudentList.js
import React from "react";
import Student from "./Student";

const StudentList = () => {
  const students = [
    { name: "Riya", course: "React", marks: 90 },
    { name: "John", course: "Node.js", marks: 85 },
    { name: "Sara", course: "MongoDB", marks: 88 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📋 Student Details (Using Props)</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {students.map((stu, index) => (
          <Student
            key={index}
            name={stu.name}
            course={stu.course}
            marks={stu.marks}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
