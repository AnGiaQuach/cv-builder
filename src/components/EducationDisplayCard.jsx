import React from "react";
import DisplayCard from "./DisplayCard";

export default function EducationDisplayCard({ educationList }) {
  return (
    <div>
      {educationList.map((item) => {
        return (
          <DisplayCard
            mainTitle={item.degree}
            subTitle={item.institution}
            startYear={item.startYear}
            endYear={item.endYear}
            key={item.id}
          ></DisplayCard>
        );
      })}
    </div>
  );
}
