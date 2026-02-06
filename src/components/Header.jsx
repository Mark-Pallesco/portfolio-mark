import React from 'react';
import { BadgeCheck, Calendar, Mail, BookOpen, ArrowRight, Phone } from 'lucide-react';
import profileImg from '../assets/mark img.png';

const Header = () => {
    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Profile Image Area */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex-shrink-0 border-4 border-white dark:border-neutral-900 shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800 transition-all duration-200">
                    <img src={profileImg} alt="Mark Angelo Pallesco" className="w-full h-full object-cover" />
                </div>

                {/* Profile Info */}
                <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">Mark Angelo Pallesco</h1>
                        <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-50 dark:fill-blue-900/30" />
                    </div>

                    <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 flex flex-wrap items-center gap-2 transition-colors duration-200">
                        <span>Manila, Philippines</span>
                        <span className="text-neutral-300 dark:text-neutral-600">•</span>
                        <span>09055062068</span>
                    </div>

                    <h2 className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-medium mb-4 leading-relaxed transition-colors duration-200">
                        Web Developer/Designer <span className="text-neutral-300 dark:text-neutral-600 mx-1.5">|</span> Full-Stack CMS Expert
                    </h2>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <a
                            href="mailto:angelomark31@gmail.com"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-5 py-2 rounded-lg text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Send Email</span>
                        </a>

                        <a
                            href="#projects"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-5 py-2 rounded-lg text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>View Projects</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
