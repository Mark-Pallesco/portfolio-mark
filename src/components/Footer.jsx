import React from 'react';
import FadeIn from './FadeIn';

const Footer = () => {
    return (
        <FadeIn
            delay={0.2}
            className="mt-8 border-t border-neutral-100 dark:border-neutral-800 pt-8 pb-4 text-center transition-colors duration-200"
        >
            <footer className="">
                <p className="text-xs text-neutral-400 dark:text-neutral-600">
                    © {new Date().getFullYear()} Mark Angelo Pallesco. All rights reserved.
                </p>
            </footer>
        </FadeIn>
    );
};

export default Footer;


