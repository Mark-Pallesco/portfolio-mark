import React from 'react';
import { ArrowRight, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const ProjectCard = ({ title, description, urlLabel }) => (
    <motion.div
        variants={item}
        whileHover={{ y: -5 }}
        className="p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group mb-2 last:mb-0"
    >
        <h3 className="text-base font-bold mb-1 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex items-center gap-2">
            {title}
            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-neutral-400" />
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 leading-relaxed transition-colors duration-200">{description}</p>
        <div>
            <span className="inline-block bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-1.5 py-0.5 text-[10px] font-mono rounded-sm border border-neutral-100 dark:border-neutral-700 transition-colors duration-200">
                {urlLabel}
            </span>
        </div>
    </motion.div>
);

const DesignCard = ({ title, description }) => (
    <motion.div
        variants={item}
        whileHover={{ y: -5 }}
        className="p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group mb-2 last:mb-0"
    >
        <div className="flex items-center gap-2 mb-1">
            <Figma className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 transition-colors duration-200">{title}</h3>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 leading-relaxed transition-colors duration-200">{description}</p>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="border-t border-neutral-100 dark:border-neutral-800 pt-6 transition-colors duration-200">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">Recent Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Development Section (Left) */}
                <div>
                    <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-4 transition-colors duration-200">Development</h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-20px" }}
                    >
                        <ProjectCard
                            title="Accounting Information System"
                            description="Collaborated as a front-end developer for a capstone project. Built the UI using React/Tailwind and integrated MySQL for backend support. Focused on meeting beneficiary company needs for a practical, real-world system."
                            urlLabel="React JS • Node JS • Express • MySQL"
                        />
                        <ProjectCard
                            title="MovieLand"
                            description="Developed a dynamic movie browsing app using React. Integrates a third-party API for up-to-date content with real-time search, filtering, and routing features."
                            urlLabel="React JS • Node JS • MySQL • Tailwind"
                        />
                    </motion.div>
                </div>

                {/* Design Section (Right) */}
                <div>
                    <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-4 transition-colors duration-200">Designs</h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-20px" }}
                    >
                        <DesignCard
                            title="Keynote Speaker Portfolio"
                            description="UI/UX design for a professional speaker's personal brand website, focusing on high-conversion layout and typography."
                        />
                        <DesignCard
                            title="E-commerce Dashboard"
                            description="Clean administrator interface design for managing products and orders, created in Figma."
                        />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Projects;

