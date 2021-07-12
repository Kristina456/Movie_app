import src from "*.avif";
import React from "react";
import "./_error.scss";
import ohNo from "../error/ohNo.png";

export default function Error() {
  return (
    <div className="form-control">
      <div className="header">Movie API</div>
      <div className="section">
        <img src={ohNo} alt="error" className="error-img"></img>
      </div>
    </div>
  );
}
