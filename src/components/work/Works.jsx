import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [active, setActive] = useState(0);
    const [projects, setProjects] = useState(projectsData);

    const handleclick = (e, index) => {
        setActive(index);
        const categoryName = e.target.textContent.toLowerCase();
        if (categoryName === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === categoryName;
            });
            setProjects(newProjects);
        }
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span
                        onClick={(e) => {
                            handleclick(e, index);
                        }}
                        className={`work__item ${active === index ? 'active-work' : ''}`}
                        key={index}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => (
                    <WorkItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Works;
