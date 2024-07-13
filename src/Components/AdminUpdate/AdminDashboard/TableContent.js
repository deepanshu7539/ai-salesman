import React, { useState } from 'react';

function TableContent({setStep}) {
  const tableData = [
    {
      id: 1,
      field1: "Business 1",
      field2: "123-456-7890",
      field3: "business1.com",
      field4: "contact@business1.com",
      field5: "John Doe",
      status: "pending",
      calls: [
        { date: "2024-07-01", template: "Template 1" },
        { date: "2024-07-05", template: "Template 2" },
      ],
    },
    {
      id: 2,
      field1: "Business 2",
      field2: "987-654-3210",
      field3: "business2.com",
      field4: "contact@business2.com",
      field5: "Jane Doe",
      status: "success",
      calls: [
        { date: "2024-07-02", template: "Template A" },
        { date: "2024-07-06", template: "Template B" },
      ],
    },
    // Add other data entries similarly
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCompany(null);
  };

  const handleSetStep=()=> {
    console.log("clicked");
    setStep(16);
  }

  return (
    <div className=''>
      <h3 className="text-lg text-center font-semibold mb-4 text-gray-800 mt-2">
        Call Record and Details
      </h3>
      <div className=" shadow-lg p-2 h-[81vh] overflow-auto">
        <table className="min-w-full divide-y divide-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Business Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Website
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 overflow-x-auto">{item.field1}</td>
                <td className="px-6 py-4 overflow-x-auto">{item.field2}</td>
                <td className="px-6 py-4 overflow-x-auto">{item.field3}</td>
                <td className="px-6 py-4 overflow-x-auto">{item.field4}</td>
                <td className="px-6 py-4 overflow-x-auto">{item.field5}</td>
                <td className="px-6 py-4 overflow-x-auto">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 overflow-x-auto space-x-2 space-y-2">
                  
                  <button className="text-white hover:text-white text-sm flex justify-center items-center bg-green-400 p-2 rounded-lg" onClick={handleSetStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 20" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>

                    Follow
                  </button>
                  <button
                    className="text-white hover:text-white text-sm flex justify-center items-center bg-blue-400 p-2 rounded-lg"
                    onClick={() => openModal(item)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedCompany && (
          <div
            className={`fixed z-10 inset-0 overflow-y-auto ${
              modalIsOpen ? "block" : "hidden"
            }`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Company Details
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <strong>Company Name:</strong> {selectedCompany.field1}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Phone:</strong> {selectedCompany.field2}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Website:</strong> {selectedCompany.field3}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Email:</strong> {selectedCompany.field4}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Founder Name:</strong> {selectedCompany.field5}
                    </p>
                    <h3 className="text-lg font-semibold mt-4">Calls</h3>
                    <ul className="list-disc ml-6">
                      {selectedCompany.calls.map((call, index) => (
                        <li key={index} className="mb-2">
                          <strong>Date:</strong> {call.date},{" "}
                          <strong>Response:</strong> {call.template}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableContent;
