import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminUpdate/auth/AdminLogin";
import Content from "./AdminUpdate/Content";
import Dashboard from "./AdminUpdate/AdminDashboard/Dashboard";
import Plans from "./AdminUpdate/Plans";
import FileUpload from "./AdminUpdate/FileUpload";
import TableContent from "./AdminUpdate/AdminDashboard/TableContent";

const AdminBox = ({ setMessages, step, setStep }) => {
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    let message = "";
    switch (step) {
      case 1:
        message =
          "Hi! I'm your AI Salesman, here to help with your sales. Here's what I can do for you. -> [Component: Content]";
        break;
      case 2:
        message =
          "Awesome! Here are the plans I offer. I suggest starting with a free trial.";
        break;
      case 3:
        message =
          "Great choice! Let's get you started with your free trial. Please log in. -> [Component: Login]";
        break;
      case 4:
        message =
          "Thank you for logging in. Let's start by quickly understanding your business needs and goals. Could you please let me know your business name?";
        break;
      case 5:
        message = "Perfect! Let me quickly analyze your business.";
        break;
      case 6:
        message =
          "I understand your business needs. Let's move on to the next step. Could you please provide me with your email for contact information?";
        break;
      case 7:
        message =
          "Got it! To ensure I have a clear understanding, could you give me a brief overview of your products or services?";
        break;
      case 8:
        message = "Who are your target customers or clients?";
        break;
      case 9:
        message =
          "Are there specific challenges or pain points in your current sales process?";
        break;
      case 10:
        message =
          "I see. Do you have any preferences for the tone or style of communication?";
        break;
      case 11:
        message =
          "Thank you for the details! I now have a good understanding of your business. I will reach out to more potential customers for you. Do you already have some customer information you'd like to share?";
        break;
      case 12:
        message =
          "Thanks! We're almost done. If you have any specific messages or information you'd like me to include when making calls, please enter them below.";
        break;
      case 13:
        message =
          "Excellent! We’re all set. Thank you for providing all the information. Here’s your dashboard where you can see everything about your sales. -> [New Component with Tabs: Dashboard and Sales Data Table]";
        break;
      case 14:
        message =
          "Welcome to your dashboard! Here you can view all your sales statistics.";
        break;
      case 15:
        message =
          "This table provides information about all your customers. You can follow up with them and check their status here.";
        break;
      case 16:
        message = "Do you have any specific message for the follow-up?";
        break;
      default:
        message = "";
    }
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "system" },
      ]);
    }
  }, [step, setMessages]);

  const renderFormComponent = () => {
    switch (step) {
      case 1:
        return <AdminLogin onNext={handleNext} />;
      case 2:
        return <Plans onNext={handleNext} />;
      case 3:
        return <AdminLogin onNext={handleNext} />;
      case 4:
        return <AdminLogin onNext={handleNext} />;
      case 5:
        return <FileUpload onNext={handleNext} />;
      case 6:
        return <FileUpload onNext={handleNext} />;
      case 7:
        return <TableContent onNext={handleNext} />;
      case 8:
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 overflow-x-auto">
      {renderFormComponent()}
    </div>
  );
};

export default AdminBox;
