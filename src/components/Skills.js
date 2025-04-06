import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 60 },
    { name: 'JavaScript', icon: <FaJs />, level: 65 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 70 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 70 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;