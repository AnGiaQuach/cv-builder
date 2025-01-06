import React from "react";
import { useState } from "react";
import DisplayCard from "./DisplayCard";

export default function ExperienceDisplayCard({ experienceList }) {
  return (
    <div>
      {experienceList.map((item) => {
        return (
          <DisplayCard
            mainTitle={item.jobTitle}
            subTitle={item.company}
            startYear={item.startYear}
            endYear={item.endYear}
            key={item.id}
          ></DisplayCard>
        );
      })}
    </div>
  );
}
