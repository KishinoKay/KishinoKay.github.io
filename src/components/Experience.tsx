import React from 'react';
import { experienceData } from '../data';
import LinkButton from './LinkButton';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section">
        <div className="container">
            <h2 className="section-title">Education & Activities</h2>
            <div className="experience-list">
            {experienceData.map((exp, index) => (
                <div key={index} className="experience-item">
                <p className="experience-date">{exp.date}</p>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.desc}</p>
                <LinkButton
                    href={exp.url}
                    type={exp.type}
                    note={exp.note}
                />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};
export default Experience;