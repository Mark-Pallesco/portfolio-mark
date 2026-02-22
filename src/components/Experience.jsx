import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

const ExperienceItem = ({ role, company, location, year }) => (
    <motion.div variants={item} className="relative pl-5 pb-6 border-l border-neutral-200 dark:border-neutral-800 last:border-0 last:pb-0 transition-colors duration-200">
        {/* Timeline Dot */}
        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-neutral-700 rounded-sm transition-colors duration-200"></div>

        <div className="flex flex-col mb-1.5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-tight transition-colors duration-200">{role}</h3>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5 sm:mt-0 sm:ml-2 whitespace-nowrap transition-colors duration-200">{year}</span>
            </div>
            <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mt-0.5 transition-colors duration-200">{company}</div>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Web Developer",
            company: "Archicoders",
            location: "Imus City",
            year: "Nov 2023 – Jan 2026"
        },
        {
            role: "Fullstack Web Developer",
            company: "Klued",
            location: "Dasmarinas City",
            year: "Oct 2023 – Nov 2023"
        },

        {
            role: "Web Developer Intern",
            company: "Hacktiv Colab Inc.",
            location: "Makati City",
            year: "Mar 2023 – Jun 2023"
        },
        {
            role: "BS Information Technology",
            company: "Technological University of the Philippines",
            location: "Makati City",
            year: "Aug 2019 – Aug 2023"
        }
    ];

    return (
        <section>
            <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">
                Experience
            </h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-2"
            >
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </motion.div>
        </section>
    );
};
export default Experience;

