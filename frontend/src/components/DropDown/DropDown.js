import React from "react";
import { poseImages } from "../../utils/pose_images";
import "./DropDown.css";

const DropDown = ({ poseList, currentPose, setCurrentPose }) => {
  const poseKName = {
    Tree: "나무 자세",
    Dog: "개 자세",
    Chair: "의자 자세",
  };
  return (
    <div className="dropdown dropdown-container">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        id="pose-dropdown-btn"
        aria-expanded="false"
      >
        {currentPose}
      </button>
      <ul
        class="dropdown-menu dropdown-custom-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {poseList.map((pose) => (
          <li onClick={() => setCurrentPose(pose.en)}>
            <div class="dropdown-item-container">
              <p className="dropdown-item-1">{pose.kr}</p>
              <img src={poseImages[pose.en]} className="dropdown-img" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
