import React, { useState, useEffect, useRef } from "react";

const ChatBox = ({ messages, setMessages, setStep, showComp }) => {
  const [input, setInput] = useState("");
  const [searchingMessage, setSearchingMessage] = useState("");
  const messagesEndRef = useRef(null);

  const commands = [
    { command: "hello hii what you can do offer", step: 1 },
    { command: "ok how to proceed next step steps plans plan", step: 2 },
    { command: "authenticate login sign in register", step: 3 },
    { command: "business name is", step: 5 },
    { command: "i offer products services", step: 8 },
    { command: "targeted clients customers client customer", step: 9 },
    { command: "pain points challenges challenge", step: 10 },
    { command: "i prefer male female warm natural bold inviting voice style", step: 11 },
    { command: "template message for sales calling preferred", step: 13 },
    { command: "@gmail.com email my", step: 7 },
    { command: "dashboard my show want to see", step: 14 },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");

      setSearchingMessage(`Searching ${input}`);

      const normalizedInput = input.trim().toLowerCase();
      const inputWords = normalizedInput.split(" ");

      let bestMatch = null;
      let maxMatchCount = 0;

      commands.forEach((cmd) => {
        const commandWords = cmd.command.toLowerCase().split(" ");
        const matchCount = commandWords.reduce((count, word) => {
          return count + (inputWords.includes(word) ? 1 : 0);
        }, 0);

        if (matchCount > maxMatchCount) {
          maxMatchCount = matchCount;
          bestMatch = cmd;
        }
      });

      if (bestMatch) {
        setStep(bestMatch.step);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={`flex flex-col md:h-[90vh] pb-4 bg-white rounded ${showComp ? "" : "h-[90vh]"}`}>
      <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-2xl shadow-chat-box ${
                message.sender === "user"
                  ? "bg-green-200 text-base leading-7"
                  : "bg-blue-50/[0.5] text-black text-base leading-7"
              }`}
              style={{ maxWidth: "80%", wordBreak: "break-word" }}
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 h-14 rounded-l-xl p-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-b from-indigo-500 to-indigo-800 text-white p-2 px-6 rounded-r-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
