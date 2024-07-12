import React, { useState, useEffect } from "react";
import AddQuestions from "./AdminUpdate/AddQuestions";
import AdminLogin from "./AdminUpdate/auth/AdminLogin";
import Content from "./AdminUpdate/Content";
import Dashboard from "./AdminUpdate/AdminDashboard/Dashboard";
import Plans from "./AdminUpdate/Plans";
import FileUpload from './AdminUpdate/FileUpload'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Adjust from './AdminUpdate/Adjust'
import TableContent from "./AdminUpdate/AdminDashboard/TableContent";
import AdminRegistration from './AdminUpdate/auth/AdminRegistration';
import PaymentForm from "./AdminUpdate/Payment";

const AdminBox = ({ setMessages, step, setStep }) => {
  const [formData, setFormData] = useState({});
  const [login,setLogin]=useState(true);
  // const [currentStep, setCurrentStep] = useState(1);

  const api = "https://zimeshare.com/api/instantquotestep1";

  const sendDataToApi = () => {
    const apiUrl = "https://api.example.com/send-data";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

  const handleLogin=()=> {
    setLogin(!login);
  }

  useEffect(() => {
    let message = "";
    switch (step) {
      case 1:
        message = "Ai-Salesman is here to help your business automate";
        break;
      case 2:
        message = "Please select your plans here..";
        break;
      case 3:
        message = "Great! Let's start by signin you in";
        break;
      case 4:
        message = "It's time to make a payment";
        break;
      case 5:
        message =
          "Business Information: What is your business name and primary contact information?\n" +
          "Could you provide a brief overview of your products or services?\n" +
          "Target Audience: Who are your target customers or clients?\n" +
          "What are the typical demographics or characteristics of your target audience?\n" +
          "Sales Goals and Challenges: What are your primary sales goals or objectives?\n" +
          "Are there specific challenges or pain points in your current sales process?\n" +
          "Communication Preferences: How do you currently communicate with your customers (e.g., email, phone calls)?\n" +
          "Do you have any preferences for the tone or style of communication?";
        break;
      case 6:
        message = "Upload the contact details of companies..";
        break;
      case 7:
        message = "Great! Let's start making call. Kindly write the template you want to use";
        break;

      case 8:
        message = "Call Records table and information";
        break;
      case 9:
        message = "View Complete information and Statistics with Dashboard";
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
        return <Content onNext={handleNext}/>
        // if(login) {
        //   return <AdminLogin handleLogin={handleLogin} onNext={handleNext}/>
        // }else {
        //   return <AdminRegistration handleLogin={handleLogin} onNext={handleNext} />
        // }
      case 2:
        return <Plans onNext={handleNext} api={api} />;
      case 3:
        return <AdminLogin onNext={handleNext} />;
      case 4:
        return <PaymentForm onNext={handleNext} />;
      case 5:
        return <PaymentForm onNext={handleNext} />;
      case 6:
        return <FileUpload onNext={handleNext} />;
      case 7:
        return <FileUpload onNext={handleNext} />;
      case 8:
        return <TableContent onNext={handleNext} api={api} />;
      case 9:
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
