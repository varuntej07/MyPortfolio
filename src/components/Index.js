import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import HomePage from './HomePage';
import Hero from './Hero';
import { ThemeProvider } from '../contexts/ThemeContext';
import './componentStyles.css';

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