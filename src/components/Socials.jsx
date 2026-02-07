import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
    >
        <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
            {label}
        </span>
    </motion.a>
);

const Socials = () => {
    return (
        <section>
            <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">
                Connect
            </h2>
            <div className="flex flex-col gap-3">
                <SocialLink
                    href="https://www.linkedin.com/in/pallesco-mark"
                    icon={Linkedin}
                    label="LinkedIn"
                />
                <SocialLink
                    href="https://github.com/Mark-Pallesco"
                    icon={Github}
                    label="GitHub"
                />
                <SocialLink
                    href="https://www.facebook.com/Pallesco.Mark/"
                    icon={Facebook}
                    label="Facebook"
                />
            </div>
        </section>
    );
};

export default Socials;
