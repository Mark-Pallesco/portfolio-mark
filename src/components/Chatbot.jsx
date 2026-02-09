import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGemini } from "../hooks/useGemini";
import markImg from "../assets/mark img.png";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);
    const { messages, sendMessage, loading } = useGemini();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            setShowTooltip(false);
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Show tooltip after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage(input);
        setInput("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[70vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700">
                                    <img src={markImg} alt="Mark" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Mark's AI Assistant</h3>
                                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 text-neutral-500" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50 dark:bg-neutral-950/50">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={idx}
                                    className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${msg.role === "user"
                                        ? "bg-neutral-900 dark:bg-neutral-100"
                                        : "border border-neutral-200 dark:border-neutral-700"
                                        }`}>
                                        {msg.role === "user" ? (
                                            <User className="w-4 h-4 text-white dark:text-neutral-900" />
                                        ) : (
                                            <img src={markImg} alt="AI" className="w-full h-full object-cover" />
                                        )}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${msg.role === "user"
                                        ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-tr-none"
                                        : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-tl-none shadow-sm"
                                        }`}>
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2 last:mb-0" {...props} />,
                                                li: ({ node, ...props }) => <li className="mb-0.5" {...props} />,
                                                strong: ({ node, ...props }) => <strong className="font-bold text-neutral-900 dark:text-neutral-100" {...props} />,
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ))}
                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-start gap-2.5"
                                >
                                    <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 overflow-hidden flex-shrink-0">
                                        <img src={markImg} alt="AI" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-3 rounded-2xl rounded-tl-none shadow-sm">
                                        <Loader2 className="w-4 h-4 animate-spin text-neutral-400" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Mark..."
                                className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20 transition-all placeholder:text-neutral-400"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || loading}
                                className="p-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tooltip / Greeting Pulse */}
            <AnimatePresence>
                {showTooltip && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 mr-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-4 py-3 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 whitespace-nowrap z-40 max-w-[250px]"
                    >
                        <div className="relative">
                            <div className="font-medium text-sm">Need a quick summary?</div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Ask my AI assistant! ✨</div>
                            {/* Arrow */}
                            <div className="absolute -bottom-[20px] right-4 w-4 h-4 bg-white dark:bg-neutral-800 border-r border-b border-neutral-100 dark:border-neutral-700 transform rotate-45"></div>
                            <button
                                onClick={() => setShowTooltip(false)}
                                className="absolute -top-5 -right-2 p-1 bg-neutral-200 dark:bg-neutral-700 rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                            >
                                <X className="w-3 h-3 text-neutral-600 dark:text-neutral-300" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button with Notification Badge & Pulse */}
            <div className="relative group">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-14 h-14 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-50 overflow-visible"
                >


                    {isOpen ? (
                        <X className="w-6 h-6 relative z-10" />
                    ) : (
                        <>
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-neutral-900 dark:bg-neutral-100 border-2 border-white dark:border-neutral-900"></span>
                            </span>
                            <MessageSquare className="w-6 h-6 relative z-10" />
                        </>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default Chatbot;
