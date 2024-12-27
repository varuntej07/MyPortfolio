import React from 'react';
import { useState } from 'react';
import './Styles/ProjectStyles.css';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
    {
        title: 'Pawfect Match app',
        description: `Designed intuitive user interfaces for login and signup processes, and developed a sophisticated user profile system.
                    Integrated a swiping mechanism for efficient user matching, enhancing user engagement.
                    Led extensive testing efforts to achieve substantial code coverage, enhancing application reliability and security.
                    Improved form handling and data management using Data Access Objects(DAOs), streamlining testing phases with mock databases.
                    Prioritized user privacy by enabling direct contact exchanges upon mutual matches, simplifying communication without in-app messaging.
                    This project not only sharpened my mobile app development skills using Flutter but also underscored the importance of precise project management
                    and collaborative problem-solving in software engineering.`,
        skills: 'Flutter, Dart ',
        link: 'https://github.com/onalanb/pawfect_match_app'
    },
    {
        title: 'Wellness-Tracker-MobileApp',
        description: `Developed a comprehensive wellness tracking mobile app using Flutter, which allows users to record emotions, diet, and workouts. 
                    The app features robust state management and data persistence using the Hive database, ensuring user data is retained across sessions.
                    Implemented a multilingual interface supporting English and Spanish, and incorporated cross-platform styling to provide a consistent user experience on both Android and iOS devices.
                    Integrated Firebase for secure email/password authentication and used Firestore to store and display user points on a leaderboard.
                    This project highlights my expertise in mobile app development, including UI design, state management, data persistence, localization, cross-platform styling, and cloud integration.`,
        skills: 'Flutter, Dart',
        link: 'https://github.com/varuntej07/Wellness-Tracker-MobileApp'
    },
    {
        title: 'Int Address Manangement system',
        description: `Designed and documented the system architecture and user interface.
                    Implemented a responsive web-based user interface using React to capture and validate country-specific address formats.
                    Developed robust API methods for saving addresses and implementing search functionalities, allowing users to search addresses across one or two countries efficiently.
                    Seeded the database with diverse addresses reflecting population distributions using Faker.js.
                    Ensured the application supports at least 1000 concurrent requests (read, write, search) with response times under 75ms by using node-cache middleware and implementing partial address matching with regex patterns.`,
        skills: 'MERN, API, Client-Server Model, node-cache',
        link: 'https://github.com/varuntej07/AddressArchitect'
    },
];

const Projects = () => {
const { isDarkMode } = useTheme();
const [startIndex, setStartIndex] = useState(0);

const nextProjects = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % projects.length);
};

const prevProjects = () => {
    setStartIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - (projects.length % 3 || 3) : prevIndex - 3
    );
};

const displayedProjects = projects.slice(startIndex, startIndex + 3);

return (
    <div className={`projects-container ${isDarkMode ? 'dark' : ''}`}>
        <h1 className="project-title">Projects</h1>
        <div className="project-grid">
            {displayedProjects.map((project, index) => (
                <div key={index} className="project-card">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="skills">
                        {project.skills.split(',').map((skill, idx) => (
                            <span key={idx} className="skill-tag">
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                    <a href={project.link} className="project-link">
                        View Project
                    </a>
                </div>
            ))}
        </div>
        <div className="navigation-buttons">
            <button onClick={prevProjects} className="nav-button">
                &#8592;
            </button>
            <button onClick={nextProjects} className="nav-button">
                &#8594;
            </button>
        </div>
    </div>
);
};

export default Projects;