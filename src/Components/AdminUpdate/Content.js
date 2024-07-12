import React, { useEffect } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";


const faqs = [
  {
    id: 1,
    question: "What is Ai-Salesman.com?",
    answer:
      "Ai-Salesman.com is a platform that helps businesses manage and optimize their sales tasks through an intelligent chatbot. The chatbot can handle customer inquiries, provide instant quotes, schedule appointments, process payments, and follow up with potential leads.",
  },

];


function  AIployeeIntro({onNext}) {
  
  useEffect(()=> {
    console.log("content");
  },[]);

  function handleNext(){ 
    onNext();
  }

  return (
    <div className="animate-fade-up">
      <div className="px-6 py-4 sm:py-4 lg:px-0 h-[90vh] bg-gradient-to-b from-blue-100 to-blue-200 overflow-y-auto overflow-hidden bg-white rounded-md">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-4">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="">
                <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Hello and welcome to{" "}
                  <span className="sm:text-2xl font-extrabold font-serif text-blue-800">
                    {" "}
                    Ai-Salesman.com!{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Welcome to Ai-Salesman.com! I'm here to streamline your sales
                  process. Our bot handles all sales-related services
                  seamlessly. It sets up a chat widget on your site that can:
                </p>
                <ul role="list" className="mt-8 space-y-4 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        Answer Questions -
                      </strong>{" "}
                      Instantly respond to inquiries about your business,
                      products, or services, ensuring your customers always get
                      the information they need.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Make Client Calls -
                      </strong>{" "}
                      2. I can call your clients on your behalf and pitch your
                      services automatically, saving you time and effort.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        Perform Automatic -
                      </strong>{" "}
                      Follow-ups: I can follow up with multiple clients
                      simultaneously, ensuring no opportunity is missed.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        Take Payments -
                      </strong>{" "}
                      Handle transactions securely and efficiently, simplifying
                      billing and payment collection.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Let's chat and get everything set up for you. I'm here to
                  guide you through the entire process. Ready to begin?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
         
        </div>
        {/* <div className="flex justify-center items-center">
          <div class="inline-flex rounded-md shadow-sm " role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
            >
              Dashboard
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
            >
              Our Plans
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AIployeeIntro