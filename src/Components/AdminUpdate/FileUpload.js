import React, { useState } from "react";

const CsvUploader = ({onNext}) => {
  const [csvFiles, setCsvFiles] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setCsvFiles((prevFiles) => [...prevFiles, file]);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleUpload = () => {
    // Handle file upload logic here
    onNext();
    // if (csvFiles.length > 0) {
    //   console.log("Uploading CSV files:", csvFiles);
    //   // You can implement file upload logic here (e.g., send to server)
    // } else {
    //   alert("Please select CSV files to upload.");
    // }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...csvFiles];
    updatedFiles.splice(index, 1);
    setCsvFiles(updatedFiles);
  };

  return (
    <div className="bg-white rounded-lg p-4 h-[90vh] overflow-y-auto ">
      <h2 className="text-xl font-semibold mb-4">Upload CSV Files</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-2 border border-gray-300 rounded-md p-2 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>
      {csvFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Selected Files:
          </h3>
          <ul className="divide-y divide-gray-300">
            {csvFiles.map((file, index) => (
              <li
                key={index}
                className={` rounded-md flex items-center justify-between py-2 ${index%2 ? "bg-gray-100": "bg-white"} px-2`}
              >
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CsvUploader;
