import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminUpdate/auth/AdminLogin";
import Content from "./AdminUpdate/Content";
import Dashboard from "./AdminUpdate/AdminDashboard/Dashboard";
import Plans from "./AdminUpdate/Plans";
import FileUpload from './AdminUpdate/FileUpload';
import AdminRegistration from "./AdminUpdate/auth/AdminRegistration";
import PaymentForm from "./AdminUpdate/Payment";
import Setup from "./AdminUpdate/Setup";

const AdminBox = ({ setMessages, step, setStep, showComp, setShowComp }) => {
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
        message = "Hi! I'm your AI Salesman, here to help with your sales. Here's what I can do for you.";
        break;
      case 2:
        message = "Awesome! Here are the plans I offer. I suggest starting with a free trial.";
        break;
      case 3:
        message = "Great choice! Let's get you started with your free trial. Please Register yourself";
        break;
      case 4:
        message = "Thank you for registration. Let's start by quickly understanding your business needs and goals. Could you please let me know your business name?";
        break;
        case 5:
          message = "Perfect! Let me quickly analyze your business.";
          setTimeout(() => {
            setStep(6);
          }, 500); // Delay of 1 second before moving to the next step
          break;
      case 6:
        message = "I understand your business needs. Let's move on to the next step. Could you please provide me with your business email for contact information?";
        break;
      case 7:
        message = "Got it! To ensure I have a clear understanding, could you give me a brief overview of your products or services?";
        break;
      case 8:
        message = "Who are your target customers or clients?";
        break;
      case 9:
        message = "Are there specific challenges or pain points in your current sales process?";
        break;
      case 10:
        message = "I see. Do you have any preferences for the tone or style of communication?";
        break;
      case 11:
        message = "Thank you for the details! I now have a good understanding of your business. I will reach out to more potential customers for you. Do you already have some customer information you'd like to share?";
        break;
      case 12:
        message = "Thanks! We're almost done. If you have any specific messages or information you'd like me to include when making calls, please enter them below.";
        break;
      case 13:
        message = "Excellent! We're all set. Thank you for providing all the information. Here's your dashboard where you can see everything about your sales.";
        break;
      case 14:
        message = "Welcome to your dashboard! Here you can view all your sales statistics.";
        break;
      case 16:
        message = "Good idea, let's follow up with this client. Do you some specific message?";
        break;
      case 17:
        message="Great! Let's proceed with the payment to activate your chosen plan.";
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
        setShowComp(true);
        return <Content onNext={handleNext} />;
      case 2:
        setShowComp(true);
        return <Plans onNext={handleNext} />;
      case 3:
        setShowComp(true);
        return <AdminRegistration onNext={handleNext} />;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setShowComp(true);
        return <Setup setStep={setStep} />;
      case 11:
        setShowComp(true);
        return <FileUpload onNext={handleNext} />;
      case 13:
      case 14:
      case 16:
        setShowComp(true);
        return <Dashboard setStep={setStep} />;
      case 17:
        setShowComp(true);
        return <PaymentForm setStep={setStep} onNext={handleNext} />;
      default:
        if(showComp) setShowComp(false);
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