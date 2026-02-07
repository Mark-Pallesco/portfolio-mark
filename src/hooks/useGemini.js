import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioContext } from "../data/portfolioContext";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const useGemini = () => {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hi! I'm Mark's portfolio assistant. Ask me anything about his skills, experience, or projects!"
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
You are an advanced AI assistant for Mark Angelo Pallesco's portfolio website. 
Your goal is to engage visitors, showcase Mark's expertise, and guide them through his professional journey.

${portfolioContext}

**Guidelines:**
- **Be Professional yet Friendly:** Maintain a polished tone that reflects Mark's attention to detail.
- **Be Concise:** Provide clear, direct answers. Use bullet points for readability.
- **Be Context-Aware:** Remember previous parts of the conversation.
- **Formatting:** Use **bold** for emphasis and lists ( - ) for clarity.
- **Call to Action:** When relevant, encourage users to check out specific projects or contact Mark.
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
