import React from "react";
import "./about.css"

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://holatelcel.com/wp-content/uploads/2020/09/Dewey-en-Malcolm-el-de-en-medio.jpg"
          className="card-img-top"
          alt="Dewey Wilkerson"
        />
        <div className="card-body">
          <h5 className="card-title">Dewey Wilkerson</h5>
          <p className="card-text">
            Sigueme en GitHub
          </p>
          <a href="https://github.com/SSEGURIDAD10" target="_blank" className="btn btn-primary">
            Follow me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
