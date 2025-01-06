import { useState } from "react";
import EducationTable from "./components/EducationTable";
import PersonalCard from "./components/PersonalCard";
import ExperienceDisplayCard from "./components/ExperienceDisplayCard";
import ExperienceTable from "./components/ExperienceTable";
import EducationDisplayCard from "./components/EducationDisplayCard";
import "./styles/cv.css";

import { cv } from "./data";

function App() {
  const [cvInfo, setCvInfo] = useState(cv);

  function handleInputChange(table, type, id) {
    const handler = (e) => {
      const newCv = {
        ...cvInfo,
        [`${table}`]: cvInfo[`${table}`].map((item) => {
          return item.id === id
            ? { ...item, [`${type}`]: e.target.value }
            : item;
        }),
      };

      setCvInfo(newCv);
    };

    return handler;
  }

  return (
    <>
      <div className="container">
        <div className="opt-panel">
          <div className="personal-table">
            Personal Detail
            <PersonalCard></PersonalCard>
          </div>

          <EducationTable
            cv={cvInfo}
            setCvInfo={setCvInfo}
            handleInputChange={handleInputChange}
          ></EducationTable>
          <ExperienceTable
            cv={cvInfo}
            setCvInfo={setCvInfo}
            handleInputChange={handleInputChange}
          ></ExperienceTable>
        </div>
        <div className="cv-displayer">
          <div className="a4-paper dark-shadow">
            <div className="name">Alex</div>
            <div>Email:alex@gmail.com</div>
            <div>Adresss:5033 NE 47th Pl, Portland, OR 97218</div>
            <div>EDUCATION</div>
            <div className="seperate-line"></div>
            <EducationDisplayCard
              educationList={cvInfo.education}
            ></EducationDisplayCard>

            <div>WORK EXPERIENCE</div>
            <div className="seperate-line"></div>
            <ExperienceDisplayCard
              experienceList={cvInfo.experience}
            ></ExperienceDisplayCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
