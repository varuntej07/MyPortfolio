import React from 'react';
import './componentStyles.css';
import { useTheme } from '../contexts/ThemeContext';
import Thread from './Thread';

const HomePage = () => {
    const { isDarkMode } = useTheme();

    return (
        <nav className={`homepage ${isDarkMode ? 'dark' : ''}`}>
            <Thread />
            <div className='nav-bar'>
                <a href='#home-intro'>Home</a>
                {/*<p><a href='#about-me'>About Me</a></p> &nbsp;*/}
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
            <div id='home-intro'>
                <h1>
                    Hey y'all! I am <span className='highlight'>Varun Tej</span>
                </h1>
                <p className= 'intro-text'>I am a passionate Computer Science Engineer with high perseverance and motivation to solve real-world problems.
                        I love building web applications and learning about new technologies which can optimize our daily life.
                    Currently, I am a Computer Science graduate student at Seattle University.
                </p>
                <div className='button-group'>
                    <button className='primary-button'>
                        <a
                            href="https://www.linkedin.com/in/varun-tej-611948188/"
                            target="_blank"
                            rel='noreferrer'
                        >
                            Resume
                        </a>
                    </button>
                    <button className="secondary-button">
                        <a
                            href="https://github.com/varuntej07"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HomePage;