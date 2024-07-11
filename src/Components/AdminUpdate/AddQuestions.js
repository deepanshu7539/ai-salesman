import React, { useState } from "react";

const AddQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: Date.now(),
      title: "",
      options: [],
      location: "", // Add location property for each question
    },
  ]);

  const handleTitleChange = (id, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, title: value } : question
      )
    );
  };

  const handleAddOption = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: [
                ...question.options,
                { id: Date.now(), text: question.newOption.trim() },
              ],
              newOption: "", // Clear input field after adding
            }
          : question
      )
    );
  };

  const handleOptionTextChange = (questionId, optionId, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.map((option) =>
                option.id === optionId ? { ...option, text: value } : option
              ),
            }
          : question
      )
    );
  };

  const handleNewOptionChange = (questionId, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, newOption: value }
          : question
      )
    );
  };

  const handleDeleteOption = (questionId, optionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.filter(
                (option) => option.id !== optionId
              ),
            }
          : question
      )
    );
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: Date.now(),
        title: "",
        options: [],
        location: "", // Initialize location for new question
      },
    ]);
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  const handleLocationChange = (questionId, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId ? { ...question, location: value } : question
      )
    );
  };

  const handleSubmit = () => {
    const isValid = questions.every(
      (question) => question.title.trim() !== "" && question.options.length > 0
    );

    if (isValid) {
      console.log("Form submitted with data:", questions);
      setQuestions([
        {
          id: Date.now(),
          title: "",
          options: [],
          location: "",
        },
      ]);
    } else {
      alert("Please enter a title and at least one option for each question.");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md h-[80vh] overflow-y-auto">
      <h2 className="text-xl mb-6 text-[#444444] text-center font-bold">
        Add Questions:
      </h2>

      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-6 border-2 border-gray-100 p-4 rounded-md"
        >
          <div className="flex justify-between mb-2">
            {/* Input field for entering the title */}
            <label
              htmlFor={`title-${question.id}`}
              className="block text-sm font-medium text-gray-700"
            >
              Question:
            </label>
            <button
              type="button"
              onClick={() => handleDeleteQuestion(question.id)}
              className="text-red-500 focus:outline-none px-4 rounded-lg hover:bg-red-500 hover:text-white"
            >
              Delete
            </button>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id={`title-${question.id}`}
              value={question.title}
              onChange={(e) => handleTitleChange(question.id, e.target.value)}
              placeholder="Enter question..."
              className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Select for question type */}
          <div className="mb-4">
            <label
              htmlFor={`location-${question.id}`}
              className="block text-sm font-medium text-gray-700"
            >
              Select the type of question:
            </label>
            <select
              id={`location-${question.id}`}
              value={question.location}
              onChange={(e) =>
                handleLocationChange(question.id, e.target.value)
              }
              className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose...</option>
              <option value="Text">Text</option>
              <option value="Number">Number</option>
              <option value="Select">Select</option>
            </select>
          </div>

          {/* Display options only if location is "Select" */}
          {question.location === "Select" && (
            <>
              {/* Display options */}
              {question.options.map((option) => (
                <div key={option.id} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) =>
                      handleOptionTextChange(
                        question.id,
                        option.id,
                        e.target.value
                      )
                    }
                    placeholder="Enter option..."
                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteOption(question.id, option.id)}
                    className="text-white focus:outline-none bg-red-500 px-4 py-2 rounded-xl hover:bg-red-700 ml-2"
                  >
                    Delete
                  </button>
                </div>
              ))}

              {/* Input field for adding new options */}
              <div className="mb-4">
                <label
                  htmlFor={`newOption-${question.id}`}
                  className="block text-sm font-medium text-gray-700 mt-2"
                >
                  New Option:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id={`newOption-${question.id}`}
                    value={question.newOption}
                    onChange={(e) =>
                      handleNewOptionChange(question.id, e.target.value)
                    }
                    placeholder="Enter new option..."
                    className="mt-1 flex-1 border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddOption(question.id)}
                    className="ml-2 bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Add question button */}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Add question
        </button>

        <button
          onClick={handleSubmit}
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;
