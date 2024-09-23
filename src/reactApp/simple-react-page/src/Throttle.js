import React, { useEffect, useState } from 'react';

// Throttle utility function
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

const ThrottledScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        const throttledScrollHandler = throttle(handleScroll, 1000); // Throttle the scroll event by 1 second
        window.addEventListener('scroll', throttledScrollHandler);

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);

    return (
        <div style={{ height: '200vh', padding: '20px' }}>
            <h1>Scroll down to see throttling in action!</h1>
            <p>Scroll Position: {scrollPosition}px</p>
        </div>
    );
};

export default ThrottledScroll;