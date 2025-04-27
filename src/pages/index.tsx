import React, { useState } from "react";

const AbdullahChatbot = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { user: userMessage, bot: "..." }]);
    setInput("");

    // Simulate bot response (replace with API call if needed)
    const botResponse = `Halo, saya Abdullah Chatbot! Anda berkata: "${userMessage}"`;
    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === prev.length - 1 ? { ...msg, bot: botResponse } : msg
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Abdullah Chatbot</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <div className="h-64 overflow-y-auto border-b mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-