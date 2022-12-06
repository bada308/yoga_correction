import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-heading">SUDA</h1>
      </div>

      <h1 className="description">Yoga Correction</h1>
      <div className="home-main">
        <div className="btn-section">
          <Link to="/login">
            <button className="btn start-btn">로그인</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
