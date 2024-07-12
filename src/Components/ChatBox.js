import React, { useState, useEffect, useRef } from "react";

const ChatBox = ({ messages, setMessages, setStep, step, showComp }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const stepsMessages = {
    1: "Hi! I'm your AI Salesman, here to help with your sales. Here's what I can do for you. -> [Component: Content]",
    2: "Awesome! Here are the plans I offer. I suggest starting with a free trial.",
    3: "Great choice! Let's get you started with your free trial. Please log in. -> [Component: Login]",
    4: "Thank you for logging in. Let's start by quickly understanding your business needs and goals. Could you please let me know your business name?",
    5: "Perfect! Let me quickly analyze your business.",
    6: "I understand your business needs. Let's move on to the next step. Could you please provide me with your email for contact information?",
    7: "Got it! To ensure I have a clear understanding, could you give me a brief overview of your products or services?",
    8: "Who are your target customers or clients?",
    9: "Are there specific challenges or pain points in your current sales process?",
    10: "I see. Do you have any preferences for the tone or style of communication?",
    11: "Thank you for the details! I now have a good understanding of your business. I will reach out to more potential customers for you. Do you already have some customer information you'd like to share?",
    12: "Thanks! We're almost done. If you have any specific messages or information you'd like me to include when making calls, please enter them below.",
    13: "Excellent! We’re all set. Thank you for providing all the information. Here’s your dashboard where you can see everything about your sales. -> [New Component with Tabs: Dashboard and Sales Data Table]",
    14: "Welcome to your dashboard! Here you can view all your sales statistics.",
    15: "This table provides information about all your customers. You can follow up with them and check their status here.",
    16: "Do you have any specific message for the follow-up?",
  };

  const handleStepMessages = (currentStep) => {
    if (stepsMessages[currentStep]) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: stepsMessages[currentStep], sender: "system" },
      ]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    handleStepMessages(step);
  }, [step]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");

      const normalizedInput = input.trim().toLowerCase();

      switch (step) {
        case 1:
          if (normalizedInput.includes("plans")) {
            setStep(2);
          }
          break;
        case 2:
          if (normalizedInput.includes("free trial")) {
            setStep(3);
          }
          break;
        case 3:
          // Handle user login logic
          setStep(4);
          break;
        case 4:
          // Assume user enters business name
          setStep(5);
          break;
        case 5:
          setStep(6);
          break;
        case 6:
          // Assume user enters email
          setStep(7);
          break;
        case 7:
          // Assume user enters product or service info
          setStep(8);
          break;
        case 8:
          // Assume user provides target customers info
          setStep(9);
          break;
        case 9:
          // Assume user provides challenges or pain points
          setStep(10);
          break;
        case 10:
          // Assume user provides preferences for communication
          setStep(11);
          break;
        case 11:
          // Assume user uploads customer information or says no
          setStep(12);
          break;
        case 12:
          // Assume user provides message or says no
          setStep(13);
          break;
        case 13:
          setStep(14);
          break;
        case 14:
          setStep(15);
          break;
        case 15:
          // Assume user clicks follow-up
          setStep(16);
          break;
        case 16:
          // Assume user provides follow-up message or says no
          setStep(1); // Reset to initial step or navigate as needed
          break;
        default:
          break;
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className={`flex flex-col md:h-[90vh] pb-4 bg-white rounded ${
        showComp ? "h-[50vh]" : "h-[90vh]"
      }`}
    >
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
