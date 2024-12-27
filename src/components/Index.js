import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import HomePage from './HomePage';
import Hero from './Hero';
import { ThemeProvider } from '../contexts/ThemeContext';
import './Styles/componentStyles.css';
import './Styles/ContactStyles.css';
import './Styles/HomePageStyles.css';
import './Styles/ProjectStyles.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="app-container">
                <Hero />
                <HomePage />
                <Projects />
                <Contact />
            </div>
        </ThemeProvider>
    );
}

export default App;