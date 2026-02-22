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
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const developmentProjects = [
    {
        title: "Marianne Page",
        description: "A business coaching platform designed to help entrepreneurs build reliable and resilient businesses. Features include resource distribution and training program showcases.",
        urlLabel: "WordPress • Elementor • GSAP",
        url: "https://mariannepage.com/"
    },
    {
        title: "Unlimited Scaling",
        description: "A strategic business scaling agency helping companies grow through systems and automation.",
        urlLabel: "Webflow • GSAP • Automation",
        url: "https://unlimitedscaling.com/"
    },
    {
        title: "Phil Gilbert",
        description: "Change Leadership & AI Transformation platform for global executives.",
        urlLabel: "WordPress • Elementor • GSAP",
        url: "#"
    },
    {
        title: "Call Me Boo",
        description: "Creative talent agency showcase and digital brand identity.",
        urlLabel: "WordPress • Web Design",
        url: "#"
    },
    {
        title: "Stephen J. Dietrich",
        description: "Equipping teams and leaders with the courage to embrace change.",
        urlLabel: "WordPress • Professional Services",
        url: "#"
    },
    {
        title: "VegiShake",
        description: "E-commerce platform for nutritional supplements and wellness products.",
        urlLabel: "WordPress • WooCommerce",
        url: "#"
    },
    {
        title: "Seven Tea House",
        description: "Premium retail experience for artisanal teas and cultural products.",
        urlLabel: "WordPress • Retail",
        url: "#"
    },
    {
        title: "Terraxy",
        description: "Environmental solutions and sustainable development consulting.",
        urlLabel: "WordPress • Sustainability",
        url: "#"
    },
    {
        title: "Made Creative Co",
        description: "Multi-disciplinary creative agency specializing in brand strategy.",
        urlLabel: "WordPress • Creative Agency",
        url: "#"
    },
    {
        title: "Rise Up London",
        description: "Dynamic fitness agency providing specialized personal training services.",
        urlLabel: "WordPress • Health & Fitness",
        url: "#"
    },
    {
        title: "Go Tours Hawaii",
        description: "High-end tourism platform for luxury Hawaiian travel experiences.",
        urlLabel: "WordPress • Booking Systems",
        url: "#"
    },
    {
        title: "Shelly's Light",
        description: "Non-profit foundation dedicated to charitable initiatives and outreach.",
        urlLabel: "WordPress • Charity",
        url: "#"
    },
    {
        title: "The Sales Machine",
        description: "Strategic B2B sales growth and performance automation platform.",
        urlLabel: "WordPress • Lead Generation",
        url: "#"
    },
    {
        title: "Udo Systems",
        description: "Enterprise IT infrastructure and unified communication solutions.",
        urlLabel: "WordPress • IT & Tech",
        url: "#"
    },
    {
        title: "PCS Northbase",
        description: "Industrial construction services and project management dashboard.",
        urlLabel: "WordPress • Industrial",
        url: "#"
    },
    {
        title: "Digital Marketing Pro",
        description: "Full-service digital agency focused on performance marketing.",
        urlLabel: "WordPress • Marketing",
        url: "#"
    },
    {
        title: "CleverPays",
        description: "Digital payment solutions and secure fintech processing portal.",
        urlLabel: "WordPress • Fintech",
        url: "#"
    },
    {
        title: "Canadian Cigarettes",
        description: "National distribution and logistics management platform.",
        urlLabel: "WordPress • Logistics",
        url: "#"
    },
    {
        title: "Urban Scape SEO",
        description: "Data-driven SEO agency helping businesses dominate search rankings.",
        urlLabel: "WordPress • SEO & Growth",
        url: "#"
    },
    {
        title: "Ecom XF",
        description: "E-commerce scaling agency focused on high-conversion strategies.",
        urlLabel: "WordPress • E-commerce",
        url: "#"
    },
    {
        title: "Michael Meyer Law",
        description: "Professional legal representation and personal injury advocacy.",
        urlLabel: "WordPress • Legal Services",
        url: "#"
    },
    {
        title: "Kandy Kingdom",
        description: "E-commerce platform for international confectionery and candies.",
        urlLabel: "WordPress • Retail",
        url: "#"
    },
    {
        title: "Amrit Sari Chatore",
        description: "A showcase of authentic Indian cuisine and catering experiences.",
        urlLabel: "WordPress • Hospitality",
        url: "#"
    },
    {
        title: "Tonkin Law",
        description: "Specialized family and property law firm digital presence.",
        urlLabel: "WordPress • Legal",
        url: "#"
    },
    {
        title: "Dev Wigs",
        description: "Premium e-commerce platform for high-quality hair solutions.",
        urlLabel: "WordPress • Fashion",
        url: "#"
    },
    {
        title: "LJI Advisory Group",
        description: "Strategic financial advisory and business growth consulting.",
        urlLabel: "WordPress • Consulting",
        url: "#"
    },
    {
        title: "Impactus Advisory",
        description: "Helping businesses navigate complex management challenges.",
        urlLabel: "WordPress • Business Strategy",
        url: "#"
    },
    {
        title: "Industry Leadr",
        description: "Performance metrics and leadership development tools.",
        urlLabel: "WordPress • Enterprise",
        url: "#"
    },
    {
        title: "Book Joel Steele",
        description: "Speaking engagement booking platform for Joel Steele.",
        urlLabel: "WordPress • Public Speaking",
        url: "#"
    },
    {
        title: "Dr. Reza Zahedi",
        description: "Professional medical and dental services appointment portal.",
        urlLabel: "WordPress • Healthcare",
        url: "#"
    },
    {
        title: "Urban Avas",
        description: "Modern residential developments and urban living solutions.",
        urlLabel: "Webflow • Real Estate",
        url: "#"
    },
    {
        title: "Circo Properties",
        description: "Simplified living and residential property management platform.",
        urlLabel: "Webflow • Property Tech",
        url: "#"
    },
    {
        title: "PowerSync AU",
        description: "Advanced electrical systems and automation solutions.",
        urlLabel: "Webflow • Automation",
        url: "#"
    },
    {
        title: "Artbook Showcase",
        description: "Immersive digital portfolio for creative professionals.",
        urlLabel: "Webflow • Portfolio",
        url: "#"
    },
    {
        title: "Hans Digital",
        description: "Clean, high-performance UI/UX design and development.",
        urlLabel: "Webflow • Agency",
        url: "#"
    },
    {
        title: "Shoe Care Pro",
        description: "Direct-to-consumer premium footwear maintenance services.",
        urlLabel: "Webflow • D2C Retail",
        url: "#"
    },
    {
        title: "Bloem Florals",
        description: "Botanical design studio and high-end floral experiences.",
        urlLabel: "Webflow • Creative Retail",
        url: "#"
    },
    {
        title: "Filtr Review",
        description: "Digital product comparison and objective review platform.",
        urlLabel: "Framer • Tech Reviews",
        url: "#"
    },
    {
        title: "Practical Darling",
        description: "Curated lifestyle, wellness, and personal growth blog.",
        urlLabel: "Framer • Lifestyle",
        url: "#"
    },
    {
        title: "Cultural Steps",
        description: "Educational initiative focusing on cultural awareness.",
        urlLabel: "Framer • Education",
        url: "#"
    },
    {
        title: "Filtr Reputation",
        description: "Review collection and reputation management platform for modern brands.",
        urlLabel: "Framer • SaaS Tool",
        url: "#"
    },
    {
        title: "Jill Schulman",
        description: "Personal branding and career coaching for executives.",
        urlLabel: "Squarespace • Coaching",
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

const ProjectModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('development');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
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
                        {/* Header */}
                        <div className="p-4 md:p-6 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">Portfolio Archive</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex gap-4 px-6 md:px-8 py-4 border-b border-neutral-100 dark:border-neutral-800">
                            {['development', 'design'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-xs font-bold uppercase tracking-widest pb-1 transition-all relative ${activeTab === tab
                                        ? "text-neutral-900 dark:text-neutral-50"
                                        : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-50"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="overflow-y-auto flex-1 p-6 md:p-8 bg-white dark:bg-neutral-900 scroll-smooth">
                            {/* Professional Note */}
                            <div className="mb-8 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                                    <strong>Confidentiality Note:</strong> Some project links are restricted. In-depth walkthroughs and technical demonstrations are available upon request during discovery calls or interviews.
                                </p>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {activeTab === 'development' ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {developmentProjects.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {designProjects.map((project, index) => (
                                                <DesignCard key={index} {...project} />
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

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

