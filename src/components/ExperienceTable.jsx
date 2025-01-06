import React from "react";
import { useState } from "react";
import CardInput from "./CardInput";

export default function ExperienceTable({ setCvInfo, cv }) {
  const [nextId, setNextId] = useState(0);

  function newExperienceCard() {
    const card = {
      id: nextId,
      jobTitle: "",
      company: "",
      startYear: "",
      endYear: "",
    };
    setNextId((currentId) => currentId + 1);
    return card;
  }

  function createHandleChange(type, id) {
    const handler = (e) => {
      const newCv = {
        ...cv,
        experience: cv.experience.map((item) =>
          item.id === id ? { ...item, [type]: e.target.value } : item
        ),
      };

      setCvInfo(newCv);
    };
    return handler;
  }

  function addExperienceCard() {
    const newCv = {
      ...cv,
      experience: [...cv.experience, newExperienceCard()],
    };
    setCvInfo(newCv);
  }

  return (
    <div className="card">
      <b>Experience</b>
      {cv.experience.map((item) => {
        return (
          <ExperienceCard
            {...item}
            key={item.id}
            createHandleChange={createHandleChange}
          ></ExperienceCard>
        );
      })}
      <button onClick={addExperienceCard}>Add</button>
    </div>
  );
}

function ExperienceCard({
  id,
  company,
  jobTitle,
  startYear,
  endYear,
  createHandleChange,
}) {
  return (
    <div className="card">
      <CardInput
        type="text"
        title="Company"
        value={company}
        handleChange={createHandleChange("company", id)}
      />
      <CardInput
        type="text"
        title="Job title"
        value={jobTitle}
        handleChange={createHandleChange("jobTitle", id)}
      />
      <CardInput
        type="number"
        title="Start year"
        value={startYear}
        handleChange={createHandleChange("startYear", id)}
      />
      <CardInput
        type="number"
        title="End year"
        value={endYear}
        handleChange={createHandleChange("endYear", id)}
      />
    </div>
  );
}
