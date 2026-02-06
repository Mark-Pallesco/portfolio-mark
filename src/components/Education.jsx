import React from 'react';

const Education = () => {
    return (
        <section className="border-t border-neutral-100 dark:border-neutral-800 pt-6 mt-6 transition-colors duration-200">
            <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">
                Education
            </h2>
            <div className="relative pl-5 border-l border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-neutral-700 rounded-sm transition-colors duration-200"></div>
                <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 transition-colors duration-200">Bachelor of Science in Information Technology</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 transition-colors duration-200">Technological University of the Philippines</p>
                    <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 transition-colors duration-200">Ermita, Manila • Aug 2019 – Aug 2023</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
