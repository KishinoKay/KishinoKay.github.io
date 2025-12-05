import React from 'react';
import { skillsData } from '../data';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
            {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};
export default Skills;