import React from "react";
import DisplayCard from "./DisplayCard";

export default function EducationDisplayCard({ educationList }) {
  return (
    <div>
      {educationList.map((item) => {
        return <DisplayCard {...item} key={item.id}></DisplayCard>;
      })}
    </div>
  );
}
