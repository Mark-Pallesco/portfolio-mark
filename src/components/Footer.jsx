import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8 border-t border-neutral-100 dark:border-neutral-800 pt-8 pb-4 text-center transition-colors duration-200">
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
                © {new Date().getFullYear()} Mark Angelo Pallesco. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
