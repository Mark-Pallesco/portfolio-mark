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

const ProjectCard = ({ title, description, urlLabel, url }) => {
    const Component = url ? motion.a : motion.div;
    return (
        <Component
            href={url}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener noreferrer" : undefined}
            variants={item}
            whileHover={{ y: -5 }}
            className="block p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group mb-2 last:mb-0"
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
        </Component>
    );
};

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

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const developmentProjects = [
    {
        title: "Marianne Page",
        description: "A business coaching platform designed to help entrepreneurs build reliable and resilient businesses. Features include resource distribution, training program showcases, and lead generation flows.",
        urlLabel: "WordPress • Elementor • HTML • CSS • JS • GSAP",
        url: "#"
    },
    {
        title: "Unlimited Scaling",
        description: "A strategic business scaling agency helping companies grow through systems and automation.",
        urlLabel: "Webflow • HTML • CSS • JS • GSAP",
        url: "#"
    },
    {
        title: "Accounting Information System",
        description: "Collaborated as a front-end developer for a capstone project. Built the UI using React/Tailwind and integrated MySQL for backend support.",
        urlLabel: "React JS • Node JS • Express • MySQL",
        url: "#"
    },
    {
        title: "MovieLand",
        description: "Developed a dynamic movie browsing app using React. Integrates a third-party API for up-to-date content with real-time search, filtering, and routing features.",
        urlLabel: "React JS • Node JS • MySQL • Tailwind",
        url: "#"
    },
    {
        title: "SaaS Analytics Dashboard",
        description: "A comprehensive dashboard for tracking SaaS metrics, featuring real-time data visualization and user management.",
        urlLabel: "Next.js • TypeScript • Recharts • Prisma",
        url: "#"
    },
    {
        title: "E-learning Platform",
        description: "A full-featured LMS with video course management, progress tracking, and interactive quizzes.",
        urlLabel: "React JS • Supabase • Tailwind • Stripe",
        url: "#"
    },
    {
        title: "Real Estate Portal",
        description: "Property listing website with advanced search filters, interactive maps, and agent contact forms.",
        urlLabel: "Vue.js • NestJS • PostgreSQL • Google Maps API",
        url: "#"
    },
    {
        title: "Fitness Tracker App",
        description: "Mobile-responsive web app for tracking workouts, nutrition, and personal fitness goals.",
        urlLabel: "React Native • Firebase • Redux • Expo",
        url: "#"
    },
    {
        title: "Portfolio Template",
        description: "Modern, high-performance portfolio template for developers with built-in dark mode and animations.",
        urlLabel: "Astro • Tailwind CSS • Framer Motion",
        url: "#"
    },
    {
        title: "AI Image Generator",
        description: "Web application integrating DALL-E API for generating and managing AI-powered artwork.",
        urlLabel: "Next.js • OpenAI API • Cloudinary • MongoDB",
        url: "#"
    }
];

const designProjects = [
    {
        title: "Keynote Speaker Portfolio",
        description: "UI/UX design for a professional speaker's personal brand website, focusing on high-conversion layout and typography.",
        url: "#"
    },
    {
        title: "E-commerce Dashboard",
        description: "Clean administrator interface design for managing products and orders, created in Figma.",
        url: "#"
    },
    {
        title: "FinTech Mobile App",
        description: "User-centric design for a personal finance management app with focus on intuitive navigation and data security.",
        url: "#"
    },
    {
        title: "Healthcare Wellness App",
        description: "Modern UI for a healthcare app facilitating patient-doctor communication and health tracking.",
        url: "#"
    },
    {
        title: "Travel Booking UI",
        description: "Comprehensive design system for a travel platform, emphasizing visual storytelling and easy booking flows.",
        url: "#"
    },
    {
        title: "Social Networking Concept",
        description: "Innovative social platform design exploring new ways of community engagement and content sharing.",
        url: "#"
    },
    {
        title: "Gaming Community Hub",
        description: "Dark-themed dashboard design for a gaming community, featuring social integration and news feeds.",
        url: "#"
    },
    {
        title: "Real Estate Landing Page",
        description: "High-converting landing page design for luxury real estate, focusing on premium visual aesthetics.",
        url: "#"
    },
    {
        title: "SaaS Branding & Landing Page",
        description: "Complete branding package and landing page design for a B2B SaaS product.",
        url: "#"
    },
    {
        title: "Educational Platform Design",
        description: "Modern and accessible design for an online learning platform, focusing on student engagement.",
        url: "#"
    }
];

const ProjectModal = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-neutral-900/20 dark:bg-black/40 backdrop-blur-sm z-50"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed inset-0 m-auto w-full max-w-4xl h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-neutral-100 dark:border-neutral-800"
                >
                    <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">All Projects</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="overflow-y-auto p-6 md:p-8 space-y-12 bg-white dark:bg-neutral-900">
                        {/* Modal Development Section */}
                        <section>
                            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-6 sticky top-0 bg-white dark:bg-neutral-900 py-2 z-10">Development</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {developmentProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                        </section>

                        {/* Modal Design Section */}
                        <section>
                            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-6 sticky top-0 bg-white dark:bg-neutral-900 py-2 z-10">Design</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {designProjects.map((project, index) => (
                                    <DesignCard key={index} {...project} />
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
);

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="projects" className="border-t border-neutral-100 dark:border-neutral-800 pt-6 transition-colors duration-200">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">Recent Projects</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-bold text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400 transition-colors flex items-center gap-1 group"
                >
                    View All
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Development Section (Left) - Limited to 2 */}
                <div>
                    <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-4 transition-colors duration-200">Development</h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-20px" }}
                    >
                        {developmentProjects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </motion.div>
                </div>

                {/* Design Section (Right) - Limited to 2 */}
                <div>
                    <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-200 tracking-wide uppercase mb-4 transition-colors duration-200">Designs</h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-20px" }}
                    >
                        {designProjects.slice(0, 2).map((project, index) => (
                            <DesignCard key={index} {...project} />
                        ))}
                    </motion.div>
                </div>
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Projects;

