import React, { useState } from "react";
import "./_loading.scss";
import loading from "../loading/loading.png";

export default function Loading() {
  return (
    <div className="form-control">
      <div className="header">Movie API</div>
      <div className="section loading__item">
        <div className="loading">
          <div>Loading!</div>
          <div>Please wait</div>
        </div>
      </div>
    </div>
  );
}
