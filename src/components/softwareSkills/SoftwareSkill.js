// src/components/softwareSkills/SoftwareSkill.js
import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => {
          return (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
              title={skill.skillName} // Optional: Adds tooltip on hover
            >
              {skill.fontAwesomeClassname ? (
                <i
                  className={skill.fontAwesomeClassname}
                  aria-hidden="true"
                ></i>
              ) : skill.svgPath ? (
                <img
                  src={skill.svgPath}
                  alt={skill.skillName}
                  className="skill-svg-icon"
                />
              ) : null}
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
