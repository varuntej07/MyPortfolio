import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Thread = () => {
    const { toggleTheme } = useTheme();
    const [isDragging, setIsDragging] = useState(false);
    const [threadLength, setThreadLength] = useState(100);
    const threadRef = useRef(null);
    const initialY = useRef(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        initialY.current = e.clientY;
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newLength = threadLength + (e.clientY - initialY.current) / 2;
            setThreadLength(Math.min(Math.max(newLength, 50), 200));

            // Toggle theme when thread is stretched beyond threshold
            if (newLength > 150) {
                toggleTheme();
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setThreadLength(100); // Reset thread length
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="thread-container">
            <div
                ref={threadRef}
                className="thread"
                style={{ height: `${threadLength}px` }}
            >
                <div
                    className="thread-weight"
                    onMouseDown={handleMouseDown}
                />
            </div>
        </div>
    );
};

export default Thread;