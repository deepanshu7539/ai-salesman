import React, { useState, useEffect, useRef } from "react";

const ChatBox = ({ messages, setMessages, setStep, step }) => {
  const [input, setInput] = useState("");
  const [searchingMessage, setSearchingMessage] = useState("");
  const messagesEndRef = useRef(null);

  const commands = [
    { command: "intro", step: 1 },
    { command: "plans", step: 2 },
    { command: "plan", step: 2 },
    { command: "login", step: 3 },
    { command: "information", step: 5 },
    { command: "template", step: 7 },
    { command: "dashboard", step: 8 },
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

      setSearchingMessage(`Searching "${input}"`);
      // setTimeout(() => {
      //   setMessages((prevMessages) => [
      //     ...prevMessages,
      //     { text: "No matching service found.", sender: "system" },
      //   ]);
      //   setSearchingMessage("");
      // }, 2000);

      const normalizedInput = input.trim().toLowerCase();
      const command = commands.find((cmd) =>
        normalizedInput.includes(cmd.command)
      );

      if (command) {
        if (command.step === step) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Already showing you the desired results",
              sender: "system",
            },
          ]);
        }
        setStep(command.step);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[50vh] md:h-[90vh] pb-4 bg-white rounded">
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
