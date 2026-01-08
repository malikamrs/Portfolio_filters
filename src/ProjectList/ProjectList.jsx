import React from 'react';
import './ProjectList.css';

export const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img src={project.img} alt={project.category} />
                </div>
            ))}
        </div>
    );
};
