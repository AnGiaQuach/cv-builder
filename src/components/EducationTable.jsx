import React from "react";
import { useState } from "react";
import CardInput from "./CardInput";

export default function EducationTable({ cv, setCvInfo, handleInputChange }) {
  const [nextId, setNextId] = useState(0);
  function newEducationCard() {
    const card = {
      id: nextId,
      degree: "",
      institution: "",
      startYear: "",
      endYear: "",
    };
    setNextId((currentId) => currentId + 1);
    return card;
  }

  function addNewEducationCard() {
    const newCv = { ...cv, education: [...cv.education, newEducationCard()] };
    setCvInfo(newCv);
  }

  function createHandleChange(type, id) {
    return handleInputChange("education", type, id);
  }

  return (
    <div className="card">
      <b>Education</b>
      {cv.education.map((item) => {
        return (
          <EducationCard
            {...item}
            key={item.id}
            createHandleChange={createHandleChange}
          ></EducationCard>
        );
      })}
      <button onClick={addNewEducationCard}>Add</button>
    </div>
  );
}

function EducationCard({
  id,
  degree,
  institution,
  startYear,
  endYear,
  createHandleChange,
}) {
  return (
    <div className="card">
      <CardInput
        type="text"
        title="Degree"
        value={degree}
        handleChange={createHandleChange("degree", id)}
      ></CardInput>
      <CardInput
        type="text"
        title="Institution"
        value={institution}
        handleChange={createHandleChange("institution", id)}
      ></CardInput>
      <CardInput
        type="number"
        title="Start year"
        value={startYear}
        handleChange={createHandleChange("startYear", id)}
      ></CardInput>
      <CardInput
        type="number"
        title="End year"
        value={endYear}
        handleChange={createHandleChange("endYear", id)}
      ></CardInput>
    </div>
  );
}
