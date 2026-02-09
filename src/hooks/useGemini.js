import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioContext } from "../data/portfolioContext";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const useGemini = () => {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hi! I'm Mark's AI Assistant. Ask me anything about his skills, experience, or projects!"
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (userMessage) => {
        if (!API_KEY) {
            setError("API Key is missing.");
            return;
        }

        const newMessages = [...messages, { role: "user", text: userMessage }];
        setMessages(newMessages);
        setLoading(true);
        setError(null);

        try {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                systemInstruction: {
                    role: "system",
                    parts: [{
                        text: `
You are **Mark's AI Assistant**, acting as a **Senior Developer** and brand advocate for Mark Angelo Pallesco.
Your goal is to impress visitors with technical depth, demonstrate Mark's expertise, and guide them through his portfolio.

${portfolioContext}

**Core Instructions:**
- **Persona:** You are expert, confident, and insightful. You are not just a support bot; you are a technical peer.
- **Explain "Why":** When mentioning technologies, explain *why* Mark uses them (e.g., "React for component reusability," "Next.js for SEO and performance").
- **Technical Context:** If asked about a project, mention the architecture or the problem it solved, not just the features.
- **Conciseness:** Be brief but high-impact. Use bullet points and bold text for readability.
- ** formatting:** STRICTLY use Markdown. Bold key terms. Use lists.

**Example Response Style:**
"Mark built **MovieLand** using **React** to ensure dynamic data rendering. He integrated a **custom API** to demonstrate real-time data fetching and efficiently managed state with **React Hooks**."
                    `}]
                }
            });

            // Format history for Gemini API
            // The API requires history to start with a 'user' role.
            // We filter out the initial greeting or any leading model messages.
            const apiHistory = messages
                .filter(msg => msg.role !== "system")
                .map(msg => ({
                    role: msg.role === "model" ? "model" : "user",
                    parts: [{ text: msg.text }]
                }));

            // Remove leading model messages to ensure history starts with user
            while (apiHistory.length > 0 && apiHistory[0].role === "model") {
                apiHistory.shift();
            }

            const chat = model.startChat({
                history: apiHistory
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages([...newMessages, { role: "model", text }]);
        } catch (err) {
            console.error("Gemini API Error Detail:", err);
            setError(err.message || "Unknown error");
            setMessages([...newMessages, { role: "model", text: `Error: ${err.message || "Unknown error"}.` }]);
        } finally {
            setLoading(false);
        }
    };

    return { messages, sendMessage, loading, error };
};
