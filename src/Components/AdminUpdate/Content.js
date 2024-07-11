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
  {
    id: 2,
    question: "How does the Ai-Salesman widget work?",
    answer:
      "The Ai-Salesman widget is a script that you embed on your website. It allows users to interact with an intelligent chatbot that can answer questions, generate quotes, book appointments, process payments, and follow up with customers.",
  },
  {
    id: 3,
    question: "What are the available plans?",
    answer:
      "We offer different plans to suit your needs: Email, Email + Phone, Email + Phone + Message.",
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer:
      "Yes, new users get a 30-day free trial to test out the Ai-Salesman platform.",
  },
 
  {
    id: 6,
    question: "How does the follow-up process work?",
    answer:
      "The chatbot can automate follow-up communications via email, phone calls, or messages. You can customize the follow-up methods, frequency, and content during the setup process.",
  },

  {
    id: 8,
    question: "How are payments processed?",
    answer:
      "The chatbot can securely handle transactions through integrated payment gateways, making billing and payment collection simple and hassle-free.",
  },

  {
    id: 11,
    question: "How do I get started with Ai-Salesman.com?",
    answer:
      "Simply log in to your account and follow the guided setup process. The intelligent chatbot will ask you a series of questions to customize the widget for your specific needs.",
  },
  {
    id: 12,
    question: "Can I customize the chatbot's responses and appearance?",
    answer:
      "Yes, you can customize the chatbot's responses, appearance, and other settings during the setup process to match your brand and requirements.",
  },
  {
    id: 13,
    question: "What metrics can I track with the admin dashboard?",
    answer:
      "The admin dashboard allows you to track key metrics such as email open rates, conversion rates, total sales, and more. You can specify the metrics you want to track during the setup process.",
  },
  {
    id: 14,
    question: "How often can I review and update my sales strategy?",
    answer:
      "You can schedule periodic check-ins to review and update your sales strategy. The frequency can be customized to monthly or quarterly based on your preference.",
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
      <div className="px-6 py-4 sm:py-4 lg:px-0 h-[90vh] bg-gradient-to-b from-blue-50 to-blue-100 overflow-y-auto overflow-hidden bg-white rounded-md">
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
                  I'm here to make managing your sales tasks easier. After you
                  answer my questions, I will provide you with a script which
                  you can embed in your site, and voila, your users would be
                  able to see a chat widget which can:
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
                      The widget would be able to provide instant responses to
                      common inquiries about your business, products, or
                      services, ensuring your customers always have the
                      information they need.
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
                        Provide Instant Quotes -
                      </strong>{" "}
                      2. If the user answers just a few questions, the widget
                      would be able to provide accurate quotes for your
                      services, helping you streamline the sales process and
                      engage customers quickly.
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
                        Schedule Appointments -
                      </strong>{" "}
                      Users will be able to book appointments with you, with
                      automatic reminders to both you and your customers,
                      ensuring no meeting is missed.
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
                      The widget can handle transactions directly through secure
                      processing, making billing and payment collection simple
                      and hassle-free.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Just chat with me here and I can get this setup for you! I'm
                  an intelligent chatbot, and I will guide you step-by-step
                  through the process. Should we get started?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
            <h2 className="text-xl text-[#444444] text-center font-bold mb-4">Frequently asked questions</h2>
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.id} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
}

export default AIployeeIntro