import React, { useState } from "react";
import "./Skills.scss";
import { Education, icons, certifications } from "../../../Data";

import { motion } from "framer-motion";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Experience</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          Certifications
        </button>
      </motion.div>
      {active === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="skills"
        >
          {icons.map((icon, index) => {
            return (
              <div key={index} className="tools">
                {icon}
              </div>
            );
          })}
        </motion.div>
      )}
      {active === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="Education"
        >
          <div className="education-container">
            {Education.map((education) => {
              return (
                <div className="education" key={education.id}>
                  <div className="school certification">
                    <h3>{education.school}</h3>
                  </div>
                  <div className="details">
                    <span>{education.degree}, {education.year}</span>
                    {education.CGPA && <p>CGPA: {education.CGPA}</p>}
                    {education.GPA && <p>GPA: {education.GPA}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
      {active === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="certifications_container"
        >
          {certifications.map((certification, index) => {
            return (
              <div className="certification" key={index}>
                <h4 className="certification_name">{certification.itemName}</h4>
                <p>Organization: {certification.organization}</p>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
