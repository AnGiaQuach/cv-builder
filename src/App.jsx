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

  function handlePersonalInput(type) {
    const handler = (e) => {
      const newCv = {
        ...cvInfo,
        personal: {
          ...cvInfo.personal,
          [`${type}`]: e.target.value,
        },
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
            <b> Personal Detail</b>
            <PersonalCard
              handlePersonalInput={handlePersonalInput}
            ></PersonalCard>
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
            <div className="space-line name-title">{cvInfo.personal.name}</div>
            <div className="space-line">Email:{cvInfo.personal.email}</div>
            <div className="space-line">
              Phone: {cvInfo.personal.phoneNumber}
            </div>
            <div className="space-line">Adresss:{cvInfo.personal.address}</div>

            <div className="space-line">EDUCATION</div>
            <div className="seperate-line"></div>
            <EducationDisplayCard
              educationList={cvInfo.education}
            ></EducationDisplayCard>

            <div className="space-line">WORK EXPERIENCE</div>
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
