import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mouss",
            company: "Unlimited Scaling",
            role: "Focus: Design & Speed",
            text: "Mark is a rare talent who bridges the gap between design and development perfectly. He delivered three high-quality Figma concepts in just a couple of days and was incredibly proactive with our branding. Fast, creative, and highly professional—I highly recommend him."
        },
        {
            name: "Rich",
            company: "Stargazy Solutions",
            role: "Focus: Technical Execution & Reliability",
            text: "Mark is a total legend. He handled a complex site migration and custom GSAP animations with ease, even troubleshooting server-side issues on his own to get the job done. His technical skills are top-tier and the final result looks amazing. 10/10!"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-50 tracking-tight transition-colors duration-200">
                Testimonials
            </h2>
            <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-100 dark:border-neutral-800 p-6">
                <div className="absolute top-4 left-4 text-neutral-200 dark:text-neutral-700">
                    <Quote className="w-8 h-8 opacity-50" />
                </div>

                <div className="relative z-10 min-h-[160px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 italic mb-4 relative z-20">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h3 className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                                    {testimonials[currentIndex].company}
                                </p>
                                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${index === currentIndex
                                    ? "bg-neutral-800 dark:bg-neutral-200"
                                    : "bg-neutral-300 dark:bg-neutral-700"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
