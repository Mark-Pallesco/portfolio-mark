import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechGroup = ({ title, items }) => (
    <div className="mb-4">
        <h3 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors duration-200">{title}</h3>
        <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
                <span
                    key={item}
                    className="px-2.5 py-1 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium text-xs rounded-md border border-neutral-100 dark:border-neutral-700 transition-colors duration-200"
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const TechStack = () => {
    return (
        <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 transition-colors duration-200">
            <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">Tech Stack</h2>
            </div>

            <TechGroup
                title="Languages"
                items={["HTML/CSS", "JavaScript", "PHP"]}
            />

            <TechGroup
                title="Frameworks / Libraries"
                items={["React.js", "Node.js", "Express.js", "Tailwind CSS"]}
            />

            <TechGroup
                title="WordPress / CMS"
                items={["WordPress", "Elementor", "WooCommerce", "Divi", "Framer", "Webflow"]}
            />

            <TechGroup
                title="Developer Tools"
                items={["Figma", "Adobe XD", "Photoshop", "Microsoft Office", "GitHub", "VS Code"]}
            />
        </div>
    );
};

export default TechStack;
