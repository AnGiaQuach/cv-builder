import React from "react";

export default function DisplayCard({
  mainTitle,
  subTitle,
  startYear,
  endYear,
}) {
  return (
    <div>
      <div className="display-card"></div>
      <div className="main-title">
        <b>{mainTitle}</b>
        <span>
          {startYear} - {endYear}
        </span>
      </div>
      <div>{subTitle}</div>
    </div>
  );
}
