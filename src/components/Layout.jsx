import React from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 py-12 px-4 sm:px-6 md:px-12 transition-colors duration-200">
            <ThemeToggle />
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Layout;
