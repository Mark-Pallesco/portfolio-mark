import React, { useEffect } from 'react';
import { BadgeCheck, Calendar, Mail, BookOpen, ArrowRight, Phone, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/mark img.png';

const Header = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://server.fillout.com/embed/v1/';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Profile Image Area */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex-shrink-0 border-4 border-white dark:border-neutral-900 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 transition-all duration-200"
                >
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={profileImg}
                        alt="Mark Angelo Pallesco"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Profile Info */}
                <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200"
                        >
                            Mark Angelo Pallesco
                        </motion.h1>
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                        >
                            <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-50 dark:fill-blue-900/30" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 flex flex-wrap items-center gap-2 transition-colors duration-200"
                    >
                        <span>Manila, Philippines</span>
                        <span className="text-neutral-300 dark:text-neutral-600">•</span>
                        <span>09055062068</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-medium mb-4 leading-relaxed transition-colors duration-200"
                    >
                        Web Developer/Designer <span className="text-neutral-300 dark:text-neutral-600 mx-1.5">|</span> Full-Stack CMS Expert
                    </motion.h2>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-5 py-2 rounded-lg text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                            data-fillout-id="f9XUyyBVKuus"
                            data-fillout-embed-type="popup"
                            data-fillout-dynamic-resize
                            data-fillout-inherit-parameters
                            data-fillout-popup-size="medium"
                        >
                            <Briefcase className="w-3.5 h-3.5" />
                            <span>Work With Me</span>
                        </motion.button>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:angelomark31@gmail.com"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-5 py-2 rounded-lg text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Send Email</span>
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-5 py-2 rounded-lg text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>View Projects</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

