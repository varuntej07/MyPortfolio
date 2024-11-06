import React from 'react';
import './componentStyles.css';
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
        skills: 'MERN, Application Programming Interfaces(API), Client-Server Model, node-cache',
        link: 'https://github.com/varuntej07/AddressArchitect'
    }
];

const Projects = () => {

    const { isDarkMode } = useTheme();

    return (
        <div className={`homepage ${isDarkMode ? 'dark' : ''}`}>
            <h1 className='project-title'>Projects</h1>
            <div className='project-cards'>
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <strong>{project.title}</strong>
                        <p>{project.description}</p>
                        <p>Skills: {project.skills}</p>
                        <a href={project.link} target="_blank" rel='noreferrer'> link </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;